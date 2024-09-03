function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Text } from 'react-native';
import { getStyles } from './styles';
function TextComponent(props, textRef) {
  const {
    text,
    size = 'tiny',
    weight = 'regular',
    brandColor,
    opacity,
    color,
    customTw = '',
    testID,
    style,
    ...rest
  } = props;
  const customStyles = getStyles({
    customTw,
    size,
    weight,
    color,
    opacity,
    brandColor
  });
  return /*#__PURE__*/React.createElement(Text, _extends({}, rest, {
    ref: textRef,
    testID: testID || 'text-component',
    style: [customStyles === null || customStyles === void 0 ? void 0 : customStyles.base, style]
  }), text);
}
export default /*#__PURE__*/React.forwardRef(TextComponent);
//# sourceMappingURL=index.js.map