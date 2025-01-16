/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<{
        title: string;
        open: boolean;
        closeFunction: () => void;
        customTw?: string | undefined;
    } & import("react-native/types").ModalBaseProps & import("react-native/types").ModalPropsIOS & import("react-native/types").ModalPropsAndroid & import("react-native/types").ViewProps & import("react").RefAttributes<import("react-native/types").ModalProps>>;
    args: {
        title: string;
        open: boolean;
    };
    argTypes: {
        closeFunction: {
            action: string;
        };
    };
};
export default _default;
export declare const Default: {};
