"use strict";

exports.__esModule = true;
exports.fieldSharedProps = exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _Cell = require("../cell/Cell");

var _use = require("@vant/use");

var _useId = require("../composables/use-id");

var _useExpose = require("../composables/use-expose");

var _icon = require("../icon");

var _cell = require("../cell");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('field'); // provide to Search component to inherit

var fieldSharedProps = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: _utils.numericProp,
  formatter: Function,
  clearIcon: (0, _utils.makeStringProp)('clear'),
  modelValue: (0, _utils.makeNumericProp)(''),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  clearTrigger: (0, _utils.makeStringProp)('focus'),
  formatTrigger: (0, _utils.makeStringProp)('onChange'),
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
};
exports.fieldSharedProps = fieldSharedProps;
var fieldProps = (0, _utils.extend)({}, _Cell.cellSharedProps, fieldSharedProps, {
  rows: _utils.numericProp,
  type: (0, _utils.makeStringProp)('text'),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: _utils.numericProp,
  labelClass: _utils.unknownProp,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});

var _default = (0, _vue.defineComponent)({
  name,
  props: fieldProps,
  emits: ['blur', 'focus', 'clear', 'keypress', 'click-input', 'click-left-icon', 'click-right-icon', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var id = (0, _useId.useId)();
    var state = (0, _vue.reactive)({
      focused: false,
      validateFailed: false,
      validateMessage: ''
    });
    var inputRef = (0, _vue.ref)();
    var customValue = (0, _vue.ref)();
    var {
      parent: form
    } = (0, _use.useParent)(_utils.FORM_KEY);

    var getModelValue = () => {
      var _props$modelValue;

      return String((_props$modelValue = props.modelValue) != null ? _props$modelValue : '');
    };

    var getProp = key => {
      if ((0, _utils.isDef)(props[key])) {
        return props[key];
      }

      if (form && (0, _utils.isDef)(form.props[key])) {
        return form.props[key];
      }
    };

    var showClear = (0, _vue.computed)(() => {
      var readonly = getProp('readonly');

      if (props.clearable && !readonly) {
        var hasValue = getModelValue() !== '';
        var trigger = props.clearTrigger === 'always' || props.clearTrigger === 'focus' && state.focused;
        return hasValue && trigger;
      }

      return false;
    });
    var formValue = (0, _vue.computed)(() => {
      if (customValue.value && slots.input) {
        return customValue.value();
      }

      return props.modelValue;
    });

    var runRules = rules => rules.reduce((promise, rule) => promise.then(() => {
      if (state.validateFailed) {
        return;
      }

      var {
        value
      } = formValue;

      if (rule.formatter) {
        value = rule.formatter(value, rule);
      }

      if (!(0, _utils2.runSyncRule)(value, rule)) {
        state.validateFailed = true;
        state.validateMessage = (0, _utils2.getRuleMessage)(value, rule);
        return;
      }

      if (rule.validator) {
        return (0, _utils2.runRuleValidator)(value, rule).then(result => {
          if (result && typeof result === 'string') {
            state.validateFailed = true;
            state.validateMessage = result;
          } else if (result === false) {
            state.validateFailed = true;
            state.validateMessage = (0, _utils2.getRuleMessage)(value, rule);
          }
        });
      }
    }), Promise.resolve());

    var resetValidation = () => {
      if (state.validateFailed) {
        state.validateFailed = false;
        state.validateMessage = '';
      }
    };

    var validate = function (rules) {
      if (rules === void 0) {
        rules = props.rules;
      }

      return new Promise(resolve => {
        resetValidation();

        if (rules) {
          runRules(rules).then(() => {
            if (state.validateFailed) {
              resolve({
                name: props.name,
                message: state.validateMessage
              });
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    };

    var validateWithTrigger = trigger => {
      if (form && props.rules) {
        var defaultTrigger = form.props.validateTrigger === trigger;
        var rules = props.rules.filter(rule => {
          if (rule.trigger) {
            return rule.trigger === trigger;
          }

          return defaultTrigger;
        });

        if (rules.length) {
          validate(rules);
        }
      }
    }; // native maxlength have incorrect line-break counting
    // see: https://github.com/youzan/vant/issues/5033


    var limitValueLength = value => {
      var {
        maxlength
      } = props;

      if ((0, _utils.isDef)(maxlength) && value.length > maxlength) {
        var modelValue = getModelValue();

        if (modelValue && modelValue.length === +maxlength) {
          return modelValue;
        }

        return value.slice(0, +maxlength);
      }

      return value;
    };

    var updateValue = function (value, trigger) {
      if (trigger === void 0) {
        trigger = 'onChange';
      }

      value = limitValueLength(value);

      if (props.type === 'number' || props.type === 'digit') {
        var isNumber = props.type === 'number';
        value = (0, _utils.formatNumber)(value, isNumber, isNumber);
      }

      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }

      if (inputRef.value && inputRef.value.value !== value) {
        inputRef.value.value = value;
      }

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    };

    var onInput = event => {
      // skip update value when composing
      if (!event.target.composing) {
        updateValue(event.target.value);
      }
    };

    var blur = () => {
      var _inputRef$value;

      return (_inputRef$value = inputRef.value) == null ? void 0 : _inputRef$value.blur();
    };

    var focus = () => {
      var _inputRef$value2;

      return (_inputRef$value2 = inputRef.value) == null ? void 0 : _inputRef$value2.focus();
    };

    var adjustTextareaSize = () => {
      var input = inputRef.value;

      if (props.type === 'textarea' && props.autosize && input) {
        (0, _utils2.resizeTextarea)(input, props.autosize);
      }
    };

    var onFocus = event => {
      state.focused = true;
      emit('focus', event);
      (0, _vue.nextTick)(adjustTextareaSize); // readonly not work in legacy mobile safari

      if (getProp('readonly')) {
        blur();
      }
    };

    var onBlur = event => {
      if (getProp('readonly')) {
        return;
      }

      state.focused = false;
      updateValue(getModelValue(), 'onBlur');
      emit('blur', event);
      validateWithTrigger('onBlur');
      (0, _vue.nextTick)(adjustTextareaSize);
      (0, _utils.resetScroll)();
    };

    var onClickInput = event => emit('click-input', event);

    var onClickLeftIcon = event => emit('click-left-icon', event);

    var onClickRightIcon = event => emit('click-right-icon', event);

    var onClear = event => {
      (0, _utils.preventDefault)(event);
      emit('update:modelValue', '');
      emit('clear', event);
    };

    var showError = (0, _vue.computed)(() => {
      if (typeof props.error === 'boolean') {
        return props.error;
      }

      if (form && form.props.showError && state.validateFailed) {
        return true;
      }
    });
    var labelStyle = (0, _vue.computed)(() => {
      var labelWidth = getProp('labelWidth');

      if (labelWidth) {
        return {
          width: (0, _utils.addUnit)(labelWidth)
        };
      }
    });

    var onKeypress = event => {
      var ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        var submitOnEnter = form && form.props.submitOnEnter;

        if (!submitOnEnter && props.type !== 'textarea') {
          (0, _utils.preventDefault)(event);
        } // trigger blur after click keyboard search button


        if (props.type === 'search') {
          blur();
        }
      }

      emit('keypress', event);
    };

    var getInputId = () => props.id || id + "-input";

    var renderInput = () => {
      var controlClass = bem('control', [getProp('inputAlign'), {
        error: showError.value,
        custom: !!slots.input,
        'min-height': props.type === 'textarea' && !props.autosize
      }]);

      if (slots.input) {
        return (0, _vue.createVNode)("div", {
          "class": controlClass,
          "onClick": onClickInput
        }, [slots.input()]);
      }

      var inputAttrs = {
        id: getInputId(),
        ref: inputRef,
        name: props.name,
        rows: props.rows !== undefined ? +props.rows : undefined,
        class: controlClass,
        value: props.modelValue,
        disabled: getProp('disabled'),
        readonly: getProp('readonly'),
        autofocus: props.autofocus,
        placeholder: props.placeholder,
        autocomplete: props.autocomplete,
        'aria-labelledby': props.label ? id + "-label" : undefined,
        onBlur,
        onFocus,
        onInput,
        onClick: onClickInput,
        onChange: _utils2.endComposing,
        onKeypress,
        onCompositionend: _utils2.endComposing,
        onCompositionstart: _utils2.startComposing
      };

      if (props.type === 'textarea') {
        return (0, _vue.createVNode)("textarea", inputAttrs, null);
      }

      return (0, _vue.createVNode)("input", (0, _vue.mergeProps)((0, _utils2.mapInputType)(props.type), inputAttrs), null);
    };

    var renderLeftIcon = () => {
      var leftIconSlot = slots['left-icon'];

      if (props.leftIcon || leftIconSlot) {
        return (0, _vue.createVNode)("div", {
          "class": bem('left-icon'),
          "onClick": onClickLeftIcon
        }, [leftIconSlot ? leftIconSlot() : (0, _vue.createVNode)(_icon.Icon, {
          "name": props.leftIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };

    var renderRightIcon = () => {
      var rightIconSlot = slots['right-icon'];

      if (props.rightIcon || rightIconSlot) {
        return (0, _vue.createVNode)("div", {
          "class": bem('right-icon'),
          "onClick": onClickRightIcon
        }, [rightIconSlot ? rightIconSlot() : (0, _vue.createVNode)(_icon.Icon, {
          "name": props.rightIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };

    var renderWordLimit = () => {
      if (props.showWordLimit && props.maxlength) {
        var count = getModelValue().length;
        return (0, _vue.createVNode)("div", {
          "class": bem('word-limit')
        }, [(0, _vue.createVNode)("span", {
          "class": bem('word-num')
        }, [count]), (0, _vue.createTextVNode)("/"), props.maxlength]);
      }
    };

    var renderMessage = () => {
      if (form && form.props.showErrorMessage === false) {
        return;
      }

      var message = props.errorMessage || state.validateMessage;

      if (message) {
        var slot = slots['error-message'];
        var errorMessageAlign = getProp('errorMessageAlign');
        return (0, _vue.createVNode)("div", {
          "class": bem('error-message', errorMessageAlign)
        }, [slot ? slot({
          message
        }) : message]);
      }
    };

    var renderLabel = () => {
      var colon = getProp('colon') ? ':' : '';

      if (slots.label) {
        return [slots.label(), colon];
      }

      if (props.label) {
        return (0, _vue.createVNode)("label", {
          "id": id + "-label",
          "for": getInputId()
        }, [props.label + colon]);
      }
    };

    var renderFieldBody = () => [(0, _vue.createVNode)("div", {
      "class": bem('body')
    }, [renderInput(), showClear.value && (0, _vue.createVNode)(_icon.Icon, {
      "name": props.clearIcon,
      "class": bem('clear'),
      "onTouchstart": onClear
    }, null), renderRightIcon(), slots.button && (0, _vue.createVNode)("div", {
      "class": bem('button')
    }, [slots.button()])]), renderWordLimit(), renderMessage()];

    (0, _useExpose.useExpose)({
      blur,
      focus,
      validate,
      formValue,
      resetValidation
    });
    (0, _vue.provide)(_use.CUSTOM_FIELD_INJECTION_KEY, {
      customValue,
      resetValidation,
      validateWithTrigger
    });
    (0, _vue.watch)(() => props.modelValue, () => {
      updateValue(getModelValue());
      resetValidation();
      validateWithTrigger('onChange');
      (0, _vue.nextTick)(adjustTextareaSize);
    });
    (0, _vue.onMounted)(() => {
      updateValue(getModelValue(), props.formatTrigger);
      (0, _vue.nextTick)(adjustTextareaSize);
    });
    return () => {
      var disabled = getProp('disabled');
      var labelAlign = getProp('labelAlign');
      var Label = renderLabel();
      var LeftIcon = renderLeftIcon();
      return (0, _vue.createVNode)(_cell.Cell, {
        "size": props.size,
        "icon": props.leftIcon,
        "class": bem({
          error: showError.value,
          disabled,
          ["label-" + labelAlign]: labelAlign
        }),
        "center": props.center,
        "border": props.border,
        "isLink": props.isLink,
        "clickable": props.clickable,
        "titleStyle": labelStyle.value,
        "valueClass": bem('value'),
        "titleClass": [bem('label', [labelAlign, {
          required: props.required
        }]), props.labelClass],
        "arrowDirection": props.arrowDirection
      }, {
        icon: LeftIcon ? () => LeftIcon : null,
        title: Label ? () => Label : null,
        value: renderFieldBody,
        extra: slots.extra
      });
    };
  }

});

exports.default = _default;