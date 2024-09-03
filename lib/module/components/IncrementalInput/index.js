function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { TextInput } from 'react-native';
import { PlusIcon, MinusIcon } from 'react-native-heroicons/outline';
import Container from '../Container';
import { getStyles } from './styles';
export default function IncrementalInput(props) {
  const {
    style,
    value,
    minValue = Number.MIN_VALUE,
    maxValue = Number.MAX_VALUE,
    stepValue = 1,
    disabled = false,
    onChangeText,
    ...rest
  } = props;
  const customStyles = getStyles({
    inputDisabled: disabled,
    minusDisabled: Number(value) === minValue || disabled,
    plusDisabled: Number(value) === maxValue || disabled
  });
  const handleIncrement = () => {
    if (onChangeText && Number(value) < maxValue) handleChange(Number(value) + stepValue);
  };
  const handleDecrement = () => {
    if (onChangeText && Number(value) > minValue) handleChange(Number(value) - stepValue);
  };
  const handleChange = customValue => {
    onChangeText && onChangeText(customValue);
  };
  return /*#__PURE__*/React.createElement(Container, {
    testID: "incremental-input",
    style: [customStyles.container, style]
  }, /*#__PURE__*/React.createElement(MinusIcon, {
    testID: "dec-button",
    color: customStyles === null || customStyles === void 0 ? void 0 : customStyles.decColor,
    onPress: handleDecrement,
    disabled: Number(value) === minValue || disabled
  }), /*#__PURE__*/React.createElement(TextInput, _extends({}, rest, {
    editable: !disabled,
    keyboardType: "number-pad",
    style: customStyles === null || customStyles === void 0 ? void 0 : customStyles.input,
    value: value === null || value === void 0 ? void 0 : value.toString(),
    onChangeText: handleChange
  })), /*#__PURE__*/React.createElement(PlusIcon, {
    testID: "inc-button",
    color: customStyles === null || customStyles === void 0 ? void 0 : customStyles.incColor,
    disabled: Number(value) === maxValue || disabled,
    onPress: handleIncrement
  }));
}
//# sourceMappingURL=index.js.map