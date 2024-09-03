"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("."));
var _globals = require("@jest/globals");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @format
 */

const mockedFunction = _globals.jest.fn();
(0, _globals.beforeEach)(() => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    title: "Modal",
    open: true,
    closeFunction: mockedFunction
  }));
});
(0, _globals.afterEach)(_reactNative.cleanup);
(0, _globals.it)('Render Modal correctly', () => {
  const modal = _reactNative.screen.getByTestId('modal-component');
  (0, _globals.expect)(modal).toBeDefined();
});
(0, _globals.it)('Render Modal correctly and close', () => {
  const modal = _reactNative.screen.getByTestId('modal-component');
  (0, _globals.expect)(modal).toBeDefined();
  const closeButton = _reactNative.screen.getByTestId('close-button');
  (0, _globals.expect)(closeButton).toBeDefined();
  _reactNative.fireEvent.press(closeButton);
  (0, _globals.expect)(mockedFunction).toBeCalledTimes(1);
});
//# sourceMappingURL=index.spec.js.map