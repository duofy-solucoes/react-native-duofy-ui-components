import React from 'react';
import { ModalProps } from 'react-native';
export type ModalType = {
    title: string;
    open: boolean;
    closeFunction: () => void;
    customTw?: string;
} & ModalProps;
declare const _default: React.ForwardRefExoticComponent<{
    title: string;
    open: boolean;
    closeFunction: () => void;
    customTw?: string | undefined;
} & import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & React.RefAttributes<ModalProps>>;
export default _default;
