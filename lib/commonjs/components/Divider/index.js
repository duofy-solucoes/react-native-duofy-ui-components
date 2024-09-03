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
function Divider(props) {
  const {
    testID,
    customTw,
    size = 1,
    text,
    ...rest
  } = props;
  const styles = (0, _styles.getStyles)({
    customTw,
    size
  });
  const getDivider = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.divider
    }), text && /*#__PURE__*/_react.default.createElement(_Text.default, {
      style: styles.dividerText,
      text: text
    }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.divider
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, rest, {
    testID: testID || 'divider-component',
    style: styles.base
  }), getDivider());
}
var _default = Divider;
exports.default = _default;
//# sourceMappingURL=index.js.map