/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<{
        disabledTrackColor?: string | undefined;
        enabledTrackColor?: string | undefined;
        enabledThumbColor?: string | undefined;
        disabledThumbColor?: string | undefined;
    } & import("react-native/types").SwitchProps & import("react").RefAttributes<import("react-native/types").SwitchProps>>;
    args: {};
};
export default _default;
export declare const SwitchDisabled: {};
export declare const SwitchEnabled: {
    args: {
        value: boolean;
    };
};
