"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("."));
var _globals = require("@jest/globals");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @format
 */

const onPressMock = _globals.jest.fn();
(0, _globals.beforeEach)(() => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    text: "testing button",
    onPress: onPressMock
  }));
});
(0, _globals.afterEach)(_reactNative.cleanup);
(0, _globals.it)('Render Button correctly', () => {
  const button = _reactNative.screen.getByTestId('button-component');
  (0, _globals.expect)(button).toBeDefined();
});
(0, _globals.it)('Render Button correctly and be clickable', () => {
  const button = _reactNative.screen.getByTestId('button-component');
  (0, _globals.expect)(button).toBeDefined();
  (0, _globals.expect)(button.props.children[0].props.text).toBe('testing button');
  _reactNative.fireEvent.press(button);
  (0, _globals.expect)(onPressMock).toBeCalled();
});
//# sourceMappingURL=index.spec.js.map