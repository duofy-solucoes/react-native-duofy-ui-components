function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';
function ButtonComponent(props, buttonRef) {
  const {
    customTw = '',
    variant = 'primary',
    text,
    testID,
    children,
    loading = false,
    disabled = false,
    style,
    ...rest
  } = props;
  const customStyles = getStyles({
    variant,
    customTw,
    disabled
  });
  const renderElement = () => {
    if (loading) {
      return /*#__PURE__*/React.createElement(ActivityIndicator, {
        color: customStyles === null || customStyles === void 0 ? void 0 : customStyles.textColor
      });
    }
    if (children !== null && children !== undefined) {
      return children;
    } else if ((children === null || children === undefined) && text !== null && text !== undefined) {
      return /*#__PURE__*/React.createElement(Text, {
        color: customStyles.textColor,
        weight: "medium",
        size: "regular",
        text: text
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({}, rest, {
    ref: buttonRef,
    testID: testID || 'button-component',
    style: [customStyles.base, style],
    disabled: disabled || loading
  }), renderElement());
}
export default /*#__PURE__*/React.forwardRef(ButtonComponent);
//# sourceMappingURL=index.js.map