function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Modal } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { getStyles } from './styles';
import Container from '../Container';
import Text from '../Text';
import Button from '../Button';
import Divider from '../Divider';
function ModalComponent(props, modalRef) {
  const {
    title,
    open,
    closeFunction,
    children,
    testID,
    customTw,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Modal, _extends({}, rest, {
    ref: modalRef,
    visible: open,
    testID: testID || 'modal-component',
    animationType: "slide",
    transparent: true,
    onRequestClose: closeFunction
  }), /*#__PURE__*/React.createElement(Container, {
    style: getStyles({
      customTw
    }).overlay
  }, /*#__PURE__*/React.createElement(Container, {
    style: getStyles({
      customTw
    }).base
  }, /*#__PURE__*/React.createElement(Container, {
    style: getStyles({
      customTw
    }).title
  }, /*#__PURE__*/React.createElement(Text, {
    size: "large",
    weight: "medium",
    text: title
  }), /*#__PURE__*/React.createElement(Button, {
    testID: "close-button",
    variant: "transparent",
    customTw: "flex w-9 h-9 rounded",
    onPress: closeFunction
  }, /*#__PURE__*/React.createElement(XMarkIcon, {
    color: "black"
  }))), /*#__PURE__*/React.createElement(Divider, {
    customTw: "pt-1 pb-1"
  }), /*#__PURE__*/React.createElement(Container, null, children))));
}
export default /*#__PURE__*/React.forwardRef(ModalComponent);
//# sourceMappingURL=index.js.map