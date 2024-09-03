"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IncrementalInput;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _outline = require("react-native-heroicons/outline");
var _Container = _interopRequireDefault(require("../Container"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function IncrementalInput(props) {
  const {
    style,
    value,
    minValue = Number.MIN_VALUE,
    maxValue = Number.MAX_VALUE,
    stepValue = 1,
    disabled = false,
    onChangeText,
    ...rest
  } = props;
  const customStyles = (0, _styles.getStyles)({
    inputDisabled: disabled,
    minusDisabled: Number(value) === minValue || disabled,
    plusDisabled: Number(value) === maxValue || disabled
  });
  const handleIncrement = () => {
    if (onChangeText && Number(value) < maxValue) handleChange(Number(value) + stepValue);
  };
  const handleDecrement = () => {
    if (onChangeText && Number(value) > minValue) handleChange(Number(value) - stepValue);
  };
  const handleChange = customValue => {
    onChangeText && onChangeText(customValue);
  };
  return /*#__PURE__*/_react.default.createElement(_Container.default, {
    testID: "incremental-input",
    style: [customStyles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_outline.MinusIcon, {
    testID: "dec-button",
    color: customStyles === null || customStyles === void 0 ? void 0 : customStyles.decColor,
    onPress: handleDecrement,
    disabled: Number(value) === minValue || disabled
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, rest, {
    editable: !disabled,
    keyboardType: "number-pad",
    style: customStyles === null || customStyles === void 0 ? void 0 : customStyles.input,
    value: value === null || value === void 0 ? void 0 : value.toString(),
    onChangeText: handleChange
  })), /*#__PURE__*/_react.default.createElement(_outline.PlusIcon, {
    testID: "inc-button",
    color: customStyles === null || customStyles === void 0 ? void 0 : customStyles.incColor,
    disabled: Number(value) === maxValue || disabled,
    onPress: handleIncrement
  }));
}
//# sourceMappingURL=index.js.map