"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function TextComponent(props, textRef) {
  const {
    text,
    size = 'tiny',
    weight = 'regular',
    brandColor,
    opacity,
    color,
    customTw = '',
    testID,
    style,
    ...rest
  } = props;
  const customStyles = (0, _styles.getStyles)({
    customTw,
    size,
    weight,
    color,
    opacity,
    brandColor
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({}, rest, {
    ref: textRef,
    testID: testID || 'text-component',
    style: [customStyles === null || customStyles === void 0 ? void 0 : customStyles.base, style]
  }), text);
}
var _default = /*#__PURE__*/_react.default.forwardRef(TextComponent);
exports.default = _default;
//# sourceMappingURL=index.js.map