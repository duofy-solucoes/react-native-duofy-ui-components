function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { EyeIcon, EyeSlashIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Text from '../Text';
import { getCustomPattern, getKeyboardType, handleValidation } from './utils';
import { getStyles } from './styles';
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
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const {
    inputType,
    keyboardType
  } = getKeyboardType(type);
  const isPasswordField = type === 'password';
  const isSearchField = type === 'search' || customIcon !== undefined;
  const IconActive = isPasswordField || isSearchField || false;
  const customPattern = pattern || getCustomPattern(inputType || type);
  const iconClickFunction = isPasswordField ? () => setVisiblePassword(!visiblePassword) : onIconClick;
  const style = getStyles({
    onError,
    isValid,
    isActive
  });
  const handleChange = changeValue => {
    setIsValid(handleValidation(changeValue, customPattern));
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
  return /*#__PURE__*/React.createElement(View, {
    testID: testID || 'input-component',
    style: style.inputContainer
  }, label && /*#__PURE__*/React.createElement(Text, {
    style: [style.label, styleLabel],
    text: label,
    weight: "medium",
    size: "regular",
    brandColor: "black",
    opacity: "primary"
  }), /*#__PURE__*/React.createElement(View, {
    style: [style.container, styleContainer]
  }, /*#__PURE__*/React.createElement(TextInput, _extends({}, rest, {
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
  })), IconActive && /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: style.icon,
    onPress: iconClickFunction
  }, isPasswordField && !visiblePassword && /*#__PURE__*/React.createElement(EyeIcon, {
    color: "rgba(13, 16, 16, 0.4)"
  }), isPasswordField && visiblePassword && /*#__PURE__*/React.createElement(EyeSlashIcon, {
    color: "rgba(13, 16, 16, 0.4)"
  }), isSearchField && !customIcon && /*#__PURE__*/React.createElement(MagnifyingGlassIcon, {
    color: "rgba(13, 16, 16, 0.4)"
  }), isSearchField && customIcon)), caption && /*#__PURE__*/React.createElement(Text, {
    style: style.caption,
    text: caption,
    weight: "regular",
    size: "small",
    color: onError ? 'red' : '',
    brandColor: !onError ? 'black' : '',
    opacity: !onError ? 'lighter' : 'dark'
  }));
}
export default /*#__PURE__*/React.forwardRef(InputComponent);
//# sourceMappingURL=index.js.map