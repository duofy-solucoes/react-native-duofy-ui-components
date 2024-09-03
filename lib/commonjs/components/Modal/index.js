"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _outline = require("react-native-heroicons/outline");
var _styles = require("./styles");
var _Container = _interopRequireDefault(require("../Container"));
var _Text = _interopRequireDefault(require("../Text"));
var _Button = _interopRequireDefault(require("../Button"));
var _Divider = _interopRequireDefault(require("../Divider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ModalComponent(props, modalRef) {
  const {
    title,
    open,
    closeFunction,
    children,
    testID,
    customTw,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, _extends({}, rest, {
    ref: modalRef,
    visible: open,
    testID: testID || 'modal-component',
    animationType: "slide",
    transparent: true,
    onRequestClose: closeFunction
  }), /*#__PURE__*/_react.default.createElement(_Container.default, {
    style: (0, _styles.getStyles)({
      customTw
    }).overlay
  }, /*#__PURE__*/_react.default.createElement(_Container.default, {
    style: (0, _styles.getStyles)({
      customTw
    }).base
  }, /*#__PURE__*/_react.default.createElement(_Container.default, {
    style: (0, _styles.getStyles)({
      customTw
    }).title
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    size: "large",
    weight: "medium",
    text: title
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    testID: "close-button",
    variant: "transparent",
    customTw: "flex w-9 h-9 rounded",
    onPress: closeFunction
  }, /*#__PURE__*/_react.default.createElement(_outline.XMarkIcon, {
    color: "black"
  }))), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    customTw: "pt-1 pb-1"
  }), /*#__PURE__*/_react.default.createElement(_Container.default, null, children))));
}
var _default = /*#__PURE__*/_react.default.forwardRef(ModalComponent);
exports.default = _default;
//# sourceMappingURL=index.js.map