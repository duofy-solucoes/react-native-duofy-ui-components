"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SwitchComponent(props, switchRef) {
  const {
    value,
    testID,
    disabledTrackColor = 'rgba(13, 16, 16, 0.6)',
    enabledTrackColor = 'rgba(248, 195, 94, 1)',
    enabledThumbColor = '#ffffff',
    disabledThumbColor = '#ffffff',
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Switch, _extends({}, rest, {
    ref: switchRef,
    testID: testID || 'switch-component',
    trackColor: {
      false: disabledTrackColor,
      true: enabledTrackColor
    },
    thumbColor: value ? enabledThumbColor : disabledThumbColor,
    value: value
  }));
}
var _default = /*#__PURE__*/_react.default.forwardRef(SwitchComponent);
exports.default = _default;
//# sourceMappingURL=index.js.map