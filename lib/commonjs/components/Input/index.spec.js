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
(0, _globals.afterEach)(_reactNative.cleanup);
(0, _globals.it)('Render Input correctly', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, null));
  const textInput = _reactNative.screen.getByTestId('input-component');
  (0, _globals.expect)(textInput).toBeDefined();
});
(0, _globals.it)('Render Input correctly and to render only the input', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, null));
  const textInput = _reactNative.screen.getByTestId('input-component');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _globals.expect)(textInput.props.children.filter(item => item)).toHaveLength(1);
});
(0, _globals.it)('Render Input correctly and to render input and label', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    label: "text label"
  }));
  const textInput = _reactNative.screen.getByTestId('input-component');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _globals.expect)(textInput.props.children.filter(item => item)).toHaveLength(2);
});
(0, _globals.it)('Render Input correctly and to render input, label and caption', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    label: "text label",
    caption: "text caption"
  }));
  const textInput = _reactNative.screen.getByTestId('input-component');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _globals.expect)(textInput.props.children.filter(item => item)).toHaveLength(3);
});
(0, _globals.it)('Render Input correctly and to render input and have placeholder equal to `text placeholder`', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    placeholder: "text placeholder"
  }));
  const textInput = _reactNative.screen.getByTestId('input-component');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _globals.expect)(textInput.props.children[1].props.children[0].props.placeholder).toBe('text placeholder');
});
(0, _globals.it)('Render Input correctly and to render input and have value equal to `text value`', () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    value: "text value"
  }));
  const textInput = _reactNative.screen.getByTestId('input-component');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _globals.expect)(textInput.props.children[1].props.children[0].props.value).toBe('text value');
});
(0, _globals.it)('Render Input correctly and to render input and execute function onFocus, onBlur, onChangeText', async () => {
  (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    value: "text value",
    onChange: mockedFunction,
    onFocus: mockedFunction,
    onBlur: mockedFunction,
    onChangeText: mockedFunction
  }));
  const textInput = _reactNative.screen.getByDisplayValue('text value');
  (0, _globals.expect)(textInput).toBeDefined();
  (0, _reactNative.fireEvent)(textInput, 'changeText', mockedFunction);
  (0, _reactNative.fireEvent)(textInput, 'change', mockedFunction);
  (0, _reactNative.fireEvent)(textInput, 'focus', mockedFunction);
  (0, _reactNative.fireEvent)(textInput, 'blur', mockedFunction);
  (0, _globals.expect)(mockedFunction).toBeCalledTimes(4);
});
//# sourceMappingURL=index.spec.js.map