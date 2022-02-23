"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _useExpose = require("../composables/use-expose");

var _picker = require("../picker");

// Utils
// Composables
// Components
var [name] = (0, _utils.createNamespace)('time-picker');

var _default = (0, _vue.defineComponent)({
  name,
  props: (0, _utils.extend)({}, _utils2.sharedProps, {
    minHour: (0, _utils.makeNumericProp)(0),
    maxHour: (0, _utils.makeNumericProp)(23),
    minMinute: (0, _utils.makeNumericProp)(0),
    maxMinute: (0, _utils.makeNumericProp)(59),
    modelValue: String
  }),
  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    var formatValue = value => {
      var {
        minHour,
        maxHour,
        maxMinute,
        minMinute
      } = props;

      if (!value) {
        value = (0, _utils.padZero)(minHour) + ":" + (0, _utils.padZero)(minMinute);
      }

      var [hour, minute] = value.split(':');
      hour = (0, _utils.padZero)((0, _utils.clamp)(+hour, +minHour, +maxHour));
      minute = (0, _utils.padZero)((0, _utils.clamp)(+minute, +minMinute, +maxMinute));
      return hour + ":" + minute;
    };

    var picker = (0, _vue.ref)();
    var currentDate = (0, _vue.ref)(formatValue(props.modelValue));
    var ranges = (0, _vue.computed)(() => [{
      type: 'hour',
      range: [+props.minHour, +props.maxHour]
    }, {
      type: 'minute',
      range: [+props.minMinute, +props.maxMinute]
    }]);
    var originColumns = (0, _vue.computed)(() => ranges.value.map(_ref2 => {
      var {
        type,
        range: rangeArr
      } = _ref2;
      var values = (0, _utils2.times)(rangeArr[1] - rangeArr[0] + 1, index => (0, _utils.padZero)(rangeArr[0] + index));

      if (props.filter) {
        values = props.filter(type, values);
      }

      return {
        type,
        values
      };
    }));
    var columns = (0, _vue.computed)(() => originColumns.value.map(column => ({
      values: column.values.map(value => props.formatter(column.type, value))
    })));

    var updateColumnValue = () => {
      var pair = currentDate.value.split(':');
      var values = [props.formatter('hour', pair[0]), props.formatter('minute', pair[1])];
      (0, _vue.nextTick)(() => {
        var _picker$value;

        (_picker$value = picker.value) == null ? void 0 : _picker$value.setValues(values);
      });
    };

    var updateInnerValue = () => {
      var [hourIndex, minuteIndex] = picker.value.getIndexes();
      var [hourColumn, minuteColumn] = originColumns.value;
      var hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      var minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];
      currentDate.value = formatValue(hour + ":" + minute);
      updateColumnValue();
    };

    var onConfirm = () => emit('confirm', currentDate.value);

    var onCancel = () => emit('cancel');

    var onChange = () => {
      updateInnerValue();
      (0, _vue.nextTick)(() => {
        (0, _vue.nextTick)(() => emit('change', currentDate.value));
      });
    };

    (0, _vue.onMounted)(() => {
      updateColumnValue();
      (0, _vue.nextTick)(updateInnerValue);
    });
    (0, _vue.watch)(columns, updateColumnValue);
    (0, _vue.watch)(() => [props.filter, props.maxHour, props.minMinute, props.maxMinute], updateInnerValue);
    (0, _vue.watch)(() => props.minHour, () => {
      (0, _vue.nextTick)(updateInnerValue);
    });
    (0, _vue.watch)(currentDate, value => emit('update:modelValue', value));
    (0, _vue.watch)(() => props.modelValue, value => {
      value = formatValue(value);

      if (value !== currentDate.value) {
        currentDate.value = value;
        updateColumnValue();
      }
    });
    (0, _useExpose.useExpose)({
      getPicker: () => picker.value
    });
    return () => (0, _vue.createVNode)(_picker.Picker, (0, _vue.mergeProps)({
      "ref": picker,
      "columns": columns.value,
      "onChange": onChange,
      "onCancel": onCancel,
      "onConfirm": onConfirm
    }, (0, _utils.pick)(props, _utils2.pickerInheritKeys)), slots);
  }

});

exports.default = _default;