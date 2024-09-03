import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { CommonType } from '..';
export type ButtonType = {
    text?: string;
    variant?: string;
    color?: string;
    customTw?: string;
} & TouchableOpacityProps & CommonType;
declare const _default: React.ForwardRefExoticComponent<{
    text?: string | undefined;
    variant?: string | undefined;
    color?: string | undefined;
    customTw?: string | undefined;
} & TouchableOpacityProps & CommonType & React.RefAttributes<TouchableOpacityProps>>;
export default _default;
