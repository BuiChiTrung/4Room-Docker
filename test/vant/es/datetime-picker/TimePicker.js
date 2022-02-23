import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { ref, watch, computed, nextTick, onMounted, defineComponent } from 'vue'; // Utils

import { pick, clamp, extend, padZero, createNamespace, makeNumericProp } from '../utils';
import { times, sharedProps, pickerInheritKeys } from './utils'; // Composables

import { useExpose } from '../composables/use-expose'; // Components

import { Picker } from '../picker';
var [name] = createNamespace('time-picker');
export default defineComponent({
  name,
  props: extend({}, sharedProps, {
    minHour: makeNumericProp(0),
    maxHour: makeNumericProp(23),
    minMinute: makeNumericProp(0),
    maxMinute: makeNumericProp(59),
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
        value = padZero(minHour) + ":" + padZero(minMinute);
      }

      var [hour, minute] = value.split(':');
      hour = padZero(clamp(+hour, +minHour, +maxHour));
      minute = padZero(clamp(+minute, +minMinute, +maxMinute));
      return hour + ":" + minute;
    };

    var picker = ref();
    var currentDate = ref(formatValue(props.modelValue));
    var ranges = computed(() => [{
      type: 'hour',
      range: [+props.minHour, +props.maxHour]
    }, {
      type: 'minute',
      range: [+props.minMinute, +props.maxMinute]
    }]);
    var originColumns = computed(() => ranges.value.map(_ref2 => {
      var {
        type,
        range: rangeArr
      } = _ref2;
      var values = times(rangeArr[1] - rangeArr[0] + 1, index => padZero(rangeArr[0] + index));

      if (props.filter) {
        values = props.filter(type, values);
      }

      return {
        type,
        values
      };
    }));
    var columns = computed(() => originColumns.value.map(column => ({
      values: column.values.map(value => props.formatter(column.type, value))
    })));

    var updateColumnValue = () => {
      var pair = currentDate.value.split(':');
      var values = [props.formatter('hour', pair[0]), props.formatter('minute', pair[1])];
      nextTick(() => {
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
      nextTick(() => {
        nextTick(() => emit('change', currentDate.value));
      });
    };

    onMounted(() => {
      updateColumnValue();
      nextTick(updateInnerValue);
    });
    watch(columns, updateColumnValue);
    watch(() => [props.filter, props.maxHour, props.minMinute, props.maxMinute], updateInnerValue);
    watch(() => props.minHour, () => {
      nextTick(updateInnerValue);
    });
    watch(currentDate, value => emit('update:modelValue', value));
    watch(() => props.modelValue, value => {
      value = formatValue(value);

      if (value !== currentDate.value) {
        currentDate.value = value;
        updateColumnValue();
      }
    });
    useExpose({
      getPicker: () => picker.value
    });
    return () => _createVNode(Picker, _mergeProps({
      "ref": picker,
      "columns": columns.value,
      "onChange": onChange,
      "onCancel": onCancel,
      "onConfirm": onConfirm
    }, pick(props, pickerInheritKeys)), slots);
  }

});