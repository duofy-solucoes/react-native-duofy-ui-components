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
function ScrollableContainer(props) {
  const {
    children,
    testID,
    customTw,
    style,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, _extends({}, rest, {
    testID: testID || 'container-component',
    style: [(0, _styles.getStyles)({
      customTw
    }).base, style]
  }), children);
}
var _default = ScrollableContainer;
exports.default = _default;
//# sourceMappingURL=index.js.map