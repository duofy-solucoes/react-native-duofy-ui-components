function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Switch } from 'react-native';
function SwitchComponent(props, switchRef) {
  const {
    value,
    testID,
    disabledTrackColor = 'rgba(13, 16, 16, 0.6)',
    enabledTrackColor = 'rgba(248, 195, 94, 1)',
    enabledThumbColor = '#ffffff',
    disabledThumbColor = '#ffffff',
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Switch, _extends({}, rest, {
    ref: switchRef,
    testID: testID || 'switch-component',
    trackColor: {
      false: disabledTrackColor,
      true: enabledTrackColor
    },
    thumbColor: value ? enabledThumbColor : disabledThumbColor,
    value: value
  }));
}
export default /*#__PURE__*/React.forwardRef(SwitchComponent);
//# sourceMappingURL=index.js.map