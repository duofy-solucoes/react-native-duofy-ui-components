"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("."));
var _globals = require("@jest/globals");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @format
 */

(0, _globals.afterEach)(_reactNative.cleanup);
(0, _globals.it)('Render Divider correctly', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, null));
  const divider = _reactNative.screen.getByTestId('divider-component');
  (0, _globals.expect)(divider).toBeDefined();
});
(0, _globals.it)('Render Divider correctly and have text equals to or', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    text: "or"
  }));
  const divider = _reactNative.screen.getByTestId('divider-component');
  (0, _globals.expect)(divider).toBeDefined();
  const dividerText = _reactNative.screen.getByText('or');
  (0, _globals.expect)(dividerText).toBeDefined();
});
//# sourceMappingURL=index.spec.js.map