"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plusDisable = exports.minusDisable = exports.inputDisabled = exports.default = exports.Default = void 0;
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'IncrementalInput',
  component: _.default,
  args: {
    value: 0,
    minValue: -1,
    maxValue: 1,
    onChangeText: () => console.log('onChangeText')
  }
};
exports.default = _default;
const Default = {};
exports.Default = Default;
const minusDisable = {
  args: {
    value: -1,
    minValue: -1,
    maxValue: 1,
    onChangeText: () => console.log('onChangeText')
  }
};
exports.minusDisable = minusDisable;
const plusDisable = {
  args: {
    value: 1,
    minValue: -1,
    maxValue: 1,
    onChangeText: () => console.log('onChangeText')
  }
};
exports.plusDisable = plusDisable;
const inputDisabled = {
  args: {
    value: 1,
    minValue: -1,
    maxValue: 1,
    disabled: true,
    onChangeText: () => console.log('onChangeText')
  }
};
exports.inputDisabled = inputDisabled;
//# sourceMappingURL=index.stories.js.map