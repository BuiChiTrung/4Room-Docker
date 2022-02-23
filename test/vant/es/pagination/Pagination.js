import { createVNode as _createVNode } from "vue";
import { computed, watchEffect, defineComponent } from 'vue';
import { clamp, makeStringProp, makeNumberProp, makeNumericProp, createNamespace, BORDER_SURROUND } from '../utils';
var [name, bem, t] = createNamespace('pagination');

var makePage = (number, text, active) => ({
  number,
  text,
  active
});

var paginationProps = {
  mode: makeStringProp('multi'),
  prevText: String,
  nextText: String,
  pageCount: makeNumericProp(0),
  modelValue: makeNumberProp(0),
  totalItems: makeNumericProp(0),
  showPageSize: makeNumericProp(5),
  itemsPerPage: makeNumericProp(10),
  forceEllipses: Boolean
};
export default defineComponent({
  name,
  props: paginationProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var count = computed(() => {
      var {
        pageCount,
        totalItems,
        itemsPerPage
      } = props;
      var count = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
      return Math.max(1, count);
    });
    var pages = computed(() => {
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
      value = clamp(value, 1, count.value);

      if (props.modelValue !== value) {
        emit('update:modelValue', value);

        if (emitChange) {
          emit('change', value);
        }
      }
    }; // format modelValue


    watchEffect(() => updateModelValue(props.modelValue));

    var renderDesc = () => _createVNode("li", {
      "class": bem('page-desc')
    }, [slots.pageDesc ? slots.pageDesc() : props.modelValue + "/" + count.value]);

    var renderPrevButton = () => {
      var {
        mode,
        modelValue
      } = props;
      var slot = slots['prev-text'];
      var disabled = modelValue === 1;
      return _createVNode("li", {
        "class": [bem('item', {
          disabled,
          border: mode === 'simple',
          prev: true
        }), BORDER_SURROUND]
      }, [_createVNode("button", {
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
      return _createVNode("li", {
        "class": [bem('item', {
          disabled,
          border: mode === 'simple',
          next: true
        }), BORDER_SURROUND]
      }, [_createVNode("button", {
        "type": "button",
        "disabled": disabled,
        "onClick": () => updateModelValue(modelValue + 1)
      }, [slot ? slot() : props.nextText || t('next')])]);
    };

    var renderPages = () => pages.value.map(page => _createVNode("li", {
      "class": [bem('item', {
        active: page.active,
        page: true
      }), BORDER_SURROUND]
    }, [_createVNode("button", {
      "type": "button",
      "aria-current": page.active || undefined,
      "onClick": () => updateModelValue(page.number)
    }, [slots.page ? slots.page(page) : page.text])]));

    return () => _createVNode("nav", {
      "role": "navigation",
      "class": bem()
    }, [_createVNode("ul", {
      "class": bem('items')
    }, [renderPrevButton(), props.mode === 'simple' ? renderDesc() : renderPages(), renderNextButton()])]);
  }

});