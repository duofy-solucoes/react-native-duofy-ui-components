"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Text = _interopRequireDefault(require("../Text"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ButtonComponent(props, buttonRef) {
  const {
    customTw = '',
    variant = 'primary',
    text,
    testID,
    children,
    loading = false,
    disabled = false,
    style,
    ...rest
  } = props;
  const customStyles = (0, _styles.getStyles)({
    variant,
    customTw,
    disabled
  });
  const renderElement = () => {
    if (loading) {
      return /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
        color: customStyles === null || customStyles === void 0 ? void 0 : customStyles.textColor
      });
    }
    if (children !== null && children !== undefined) {
      return children;
    } else if ((children === null || children === undefined) && text !== null && text !== undefined) {
      return /*#__PURE__*/_react.default.createElement(_Text.default, {
        color: customStyles.textColor,
        weight: "medium",
        size: "regular",
        text: text
      });
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({}, rest, {
    ref: buttonRef,
    testID: testID || 'button-component',
    style: [customStyles.base, style],
    disabled: disabled || loading
  }), renderElement());
}
var _default = /*#__PURE__*/_react.default.forwardRef(ButtonComponent);
exports.default = _default;
//# sourceMappingURL=index.js.map