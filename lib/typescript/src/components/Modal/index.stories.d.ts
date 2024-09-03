/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<{
        title: string;
        open: boolean;
        closeFunction: () => void;
        customTw?: string | undefined;
    } & import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & import("react").RefAttributes<import("react-native").ModalProps>>;
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
