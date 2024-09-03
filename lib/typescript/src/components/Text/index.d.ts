import React from 'react';
import { TextProps } from 'react-native';
export type TextType = {
    text: string;
    size?: string;
    brandColor?: string;
    opacity?: string;
    color?: string;
    weight?: string;
    customTw?: string;
} & TextProps;
declare const _default: React.ForwardRefExoticComponent<{
    text: string;
    size?: string | undefined;
    brandColor?: string | undefined;
    opacity?: string | undefined;
    color?: string | undefined;
    weight?: string | undefined;
    customTw?: string | undefined;
} & TextProps & React.RefAttributes<TextProps>>;
export default _default;
