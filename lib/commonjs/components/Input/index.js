"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _outline = require("react-native-heroicons/outline");
var _Text = _interopRequireDefault(require("../Text"));
var _utils = require("./utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function InputComponent(props, inputRef) {
  const {
    type = 'text',
    onError,
    customIcon,
    onIconClick = () => {},
    onChangeText,
    onFocus,
    onBlur,
    pattern,
    label,
    caption,
    testID,
    styleLabel = {},
    styleInput = {},
    styleContainer = {},
    ...rest
  } = props;
  const [isActive, setIsActive] = (0, _react.useState)(false);
  const [isValid, setIsValid] = (0, _react.useState)(true);
  const [visiblePassword, setVisiblePassword] = (0, _react.useState)(false);
  const {
    inputType,
    keyboardType
  } = (0, _utils.getKeyboardType)(type);
  const isPasswordField = type === 'password';
  const isSearchField = type === 'search' || customIcon !== undefined;
  const IconActive = isPasswordField || isSearchField || false;
  const customPattern = pattern || (0, _utils.getCustomPattern)(inputType || type);
  const iconClickFunction = isPasswordField ? () => setVisiblePassword(!visiblePassword) : onIconClick;
  const style = (0, _styles.getStyles)({
    onError,
    isValid,
    isActive
  });
  const handleChange = changeValue => {
    setIsValid((0, _utils.handleValidation)(changeValue, customPattern));
    isValid && onChangeText && onChangeText(changeValue);
  };
  const handleFocus = e => {
    setIsActive(true);
    onFocus && onFocus(e);
  };
  const handleBlur = e => {
    setIsActive(false);
    onBlur && onBlur(e);
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    testID: testID || 'input-component',
    style: style.inputContainer
  }, label && /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: [style.label, styleLabel],
    text: label,
    weight: "medium",
    size: "regular",
    brandColor: "black",
    opacity: "primary"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.container, styleContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, rest, {
    ref: inputRef,
    autoCapitalize: "none",
    style: [style.input, styleInput],
    inputMode: inputType,
    keyboardType: keyboardType,
    placeholderTextColor: "rgba(13, 16, 16, .6)",
    secureTextEntry: isPasswordField && !visiblePassword,
    onChangeText: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  })), IconActive && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: style.icon,
    onPress: iconClickFunction
  }, isPasswordField && !visiblePassword && /*#__PURE__*/_react.default.createElement(_outline.EyeIcon, {
    color: "rgba(13, 16, 16, 0.4)"
  }), isPasswordField && visiblePassword && /*#__PURE__*/_react.default.createElement(_outline.EyeSlashIcon, {
    color: "rgba(13, 16, 16, 0.4)"
  }), isSearchField && !customIcon && /*#__PURE__*/_react.default.createElement(_outline.MagnifyingGlassIcon, {
    color: "rgba(13, 16, 16, 0.4)"
  }), isSearchField && customIcon)), caption && /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: style.caption,
    text: caption,
    weight: "regular",
    size: "small",
    color: onError ? 'red' : '',
    brandColor: !onError ? 'black' : '',
    opacity: !onError ? 'lighter' : 'dark'
  }));
}
var _default = /*#__PURE__*/_react.default.forwardRef(InputComponent);
exports.default = _default;
//# sourceMappingURL=index.js.map