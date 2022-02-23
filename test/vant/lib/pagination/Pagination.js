"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem, t] = (0, _utils.createNamespace)('pagination');

var makePage = (number, text, active) => ({
  number,
  text,
  active
});

var paginationProps = {
  mode: (0, _utils.makeStringProp)('multi'),
  prevText: String,
  nextText: String,
  pageCount: (0, _utils.makeNumericProp)(0),
  modelValue: (0, _utils.makeNumberProp)(0),
  totalItems: (0, _utils.makeNumericProp)(0),
  showPageSize: (0, _utils.makeNumericProp)(5),
  itemsPerPage: (0, _utils.makeNumericProp)(10),
  forceEllipses: Boolean
};

var _default = (0, _vue.defineComponent)({
  name,
  props: paginationProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var count = (0, _vue.computed)(() => {
      var {
        pageCount,
        totalItems,
        itemsPerPage
      } = props;
      var count = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
      return Math.max(1, count);
    });
    var pages = (0, _vue.computed)(() => {
      var items = [];
      var pageCount = count.value;
      var showPageSize = +props.showPageSize;
      var {
        modelValue,
        forceEllipses
      } = props; // Default page limits

      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(modelValue - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === modelValue);
        items.push(page);
      } // Add links to move between page sets


      if (isMaxSized && showPageSize > 0 && forceEllipses) {
        if (startPage > 1) {
          var prevPages = makePage(startPage - 1, '...');
          items.unshift(prevPages);
        }

        if (endPage < pageCount) {
          var nextPages = makePage(endPage + 1, '...');
          items.push(nextPages);
        }
      }

      return items;
    });

    var updateModelValue = (value, emitChange) => {
      value = (0, _utils.clamp)(value, 1, count.value);

      if (props.modelValue !== value) {
        emit('update:modelValue', value);

        if (emitChange) {
          emit('change', value);
        }
      }
    }; // format modelValue


    (0, _vue.watchEffect)(() => updateModelValue(props.modelValue));

    var renderDesc = () => (0, _vue.createVNode)("li", {
      "class": bem('page-desc')
    }, [slots.pageDesc ? slots.pageDesc() : props.modelValue + "/" + count.value]);

    var renderPrevButton = () => {
      var {
        mode,
        modelValue
      } = props;
      var slot = slots['prev-text'];
      var disabled = modelValue === 1;
      return (0, _vue.createVNode)("li", {
        "class": [bem('item', {
          disabled,
          border: mode === 'simple',
          prev: true
        }), _utils.BORDER_SURROUND]
      }, [(0, _vue.createVNode)("button", {
        "type": "button",
        "disabled": disabled,
        "onClick": () => updateModelValue(modelValue - 1)
      }, [slot ? slot() : props.prevText || t('prev')])]);
    };

    var renderNextButton = () => {
      var {
        mode,
        modelValue
      } = props;
      var slot = slots['next-text'];
      var disabled = modelValue === count.value;
      return (0, _vue.createVNode)("li", {
        "class": [bem('item', {
          disabled,
          border: mode === 'simple',
          next: true
        }), _utils.BORDER_SURROUND]
      }, [(0, _vue.createVNode)("button", {
        "type": "button",
        "disabled": disabled,
        "onClick": () => updateModelValue(modelValue + 1)
      }, [slot ? slot() : props.nextText || t('next')])]);
    };

    var renderPages = () => pages.value.map(page => (0, _vue.createVNode)("li", {
      "class": [bem('item', {
        active: page.active,
        page: true
      }), _utils.BORDER_SURROUND]
    }, [(0, _vue.createVNode)("button", {
      "type": "button",
      "aria-current": page.active || undefined,
      "onClick": () => updateModelValue(page.number)
    }, [slots.page ? slots.page(page) : page.text])]));

    return () => (0, _vue.createVNode)("nav", {
      "role": "navigation",
      "class": bem()
    }, [(0, _vue.createVNode)("ul", {
      "class": bem('items')
    }, [renderPrevButton(), props.mode === 'simple' ? renderDesc() : renderPages(), renderNextButton()])]);
  }

});

exports.default = _default;