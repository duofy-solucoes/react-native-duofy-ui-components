import React from 'react';
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        caption?: string | undefined;
        label?: string | undefined;
        type?: string | undefined;
        onError?: boolean | undefined;
        onIconClick?: void | undefined;
        pattern?: string | string[] | undefined;
        mask?: string | undefined;
        customIcon?: JSX.Element | undefined;
        moneySeparator?: boolean | undefined;
        styleLabel?: any;
        styleInput?: any;
        styleContainer?: any;
    } & import("react-native/types").TextInputProps & import("react-native/types").ViewProps & React.RefAttributes<import("react-native/types").TextInput & import("react-native/types").View>>;
    args: {};
};
export default _default;
export declare const Default: {};
export declare const WithPlaceholder: {
    args: {
        placeholder: string;
    };
};
export declare const newVariante: {
    args: {
        onError: boolean;
        placeholder: string;
        styleInput: {
            borderColor: string;
        };
    };
};
export declare const onError: {
    args: {
        onError: boolean;
    };
};
export declare const withLabel: {
    args: {
        label: string;
    };
};
export declare const withCaption: {
    args: {
        caption: string;
    };
};
export declare const withCaptionAndLabel: {
    args: {
        label: string;
        caption: string;
    };
};
export declare const withCaptionAndLabelOnError: {
    args: {
        label: string;
        caption: string;
        onError: boolean;
    };
};
export declare const TypeMoney: {
    args: {
        type: string;
        value: number;
    };
};
export declare const TypePassword: {
    args: {
        type: string;
    };
};
export declare const TypeSearch: {
    args: {
        type: string;
    };
};
export declare const TypeSearchCustomIcon: {
    args: {
        type: string;
        customIcon: React.JSX.Element;
    };
};
export declare const TypeEmail: {
    args: {
        type: string;
    };
};
export declare const TypeTel: {
    args: {
        type: string;
    };
};
export declare const TypeNumber: {
    args: {
        type: string;
    };
};
