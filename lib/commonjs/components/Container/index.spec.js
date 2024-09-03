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
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, null));
});
(0, _globals.afterEach)(_reactNative.cleanup);
(0, _globals.it)('Render Container correctly', () => {
  const container = _reactNative.screen.getByTestId('container-component');
  (0, _globals.expect)(container).toBeDefined();
});
//# sourceMappingURL=index.spec.js.map