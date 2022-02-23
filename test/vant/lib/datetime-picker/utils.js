"use strict";

exports.__esModule = true;
exports.getMonthEndDay = void 0;
exports.getTrueValue = getTrueValue;
exports.sharedProps = exports.pickerInheritKeys = void 0;
exports.times = times;

var _utils = require("../utils");

var _Picker = require("../picker/Picker");

var sharedProps = (0, _utils.extend)({}, _Picker.pickerSharedProps, {
  filter: Function,
  columnsOrder: Array,
  formatter: {
    type: Function,
    default: (type, value) => value
  }
});
exports.sharedProps = sharedProps;
var pickerInheritKeys = Object.keys(_Picker.pickerSharedProps);
exports.pickerInheritKeys = pickerInheritKeys;

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

function getTrueValue(value) {
  if (!value) {
    return 0;
  }

  while (Number.isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}

var getMonthEndDay = (year, month) => 32 - new Date(year, month - 1, 32).getDate();

exports.getMonthEndDay = getMonthEndDay;