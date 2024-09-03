"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("."));
var _globals = require("@jest/globals");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @format
 */

const onChangeText = jest.fn();
(0, _globals.beforeEach)(() => {
  (0, _reactNative.cleanup)();
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    value: "0",
    onChangeText: onChangeText
  }));
});
(0, _globals.it)('Render IncrementalInput correctly', () => {
  const incContainer = _reactNative.screen.getByTestId('incremental-input');
  (0, _globals.expect)(incContainer).toBeDefined();
});
(0, _globals.it)('Render IncrementalInput correctly and render dec-button', () => {
  const incContainer = _reactNative.screen.getByTestId('incremental-input');
  (0, _globals.expect)(incContainer).toBeDefined();
  const decButtom = _reactNative.screen.getByTestId('dec-button');
  (0, _globals.expect)(decButtom).toBeDefined();
});
(0, _globals.it)('Render IncrementalInput correctly and render inc-button', () => {
  const incContainer = _reactNative.screen.getByTestId('incremental-input');
  (0, _globals.expect)(incContainer).toBeDefined();
  const incButton = _reactNative.screen.getByTestId('inc-button');
  (0, _globals.expect)(incButton).toBeDefined();
});
//# sourceMappingURL=index.spec.js.map