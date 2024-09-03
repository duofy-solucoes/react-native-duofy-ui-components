function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ScrollView } from 'react-native';
import { getStyles } from './styles';
function ScrollableContainer(props) {
  const {
    children,
    testID,
    customTw,
    style,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(ScrollView, _extends({}, rest, {
    testID: testID || 'container-component',
    style: [getStyles({
      customTw
    }).base, style]
  }), children);
}
export default ScrollableContainer;
//# sourceMappingURL=index.js.map