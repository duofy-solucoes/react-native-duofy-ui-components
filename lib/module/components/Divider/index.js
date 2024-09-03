function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import { getStyles } from './styles';
function Divider(props) {
  const {
    testID,
    customTw,
    size = 1,
    text,
    ...rest
  } = props;
  const styles = getStyles({
    customTw,
    size
  });
  const getDivider = () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
      style: styles.divider
    }), text && /*#__PURE__*/React.createElement(Text, {
      style: styles.dividerText,
      text: text
    }), /*#__PURE__*/React.createElement(View, {
      style: styles.divider
    }));
  };
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    testID: testID || 'divider-component',
    style: styles.base
  }), getDivider());
}
export default Divider;
//# sourceMappingURL=index.js.map