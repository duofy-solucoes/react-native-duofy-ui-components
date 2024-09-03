"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("."));
var _globals = require("@jest/globals");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @format
 */

(0, _globals.beforeEach)(() => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    text: "testing text"
  }));
});
(0, _globals.afterEach)(_reactNative.cleanup);
(0, _globals.it)('Render Text correctly', () => {
  const textInput = _reactNative.screen.getByTestId('text-component');
  (0, _globals.expect)(textInput).toBeDefined();
});
(0, _globals.it)('Render Text to be type equals to Text', () => {
  const textInput = _reactNative.screen.getByTestId('text-component');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _globals.expect)(textInput.type).toBe('Text');
});
(0, _globals.it)('Render Text and to have text equals to `testing text`', () => {
  const textInput = _reactNative.screen.getByTestId('text-component');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _globals.expect)(textInput.props.children).toBe('testing text');
});
//# sourceMappingURL=index.spec.js.map