import React from 'react';
import { SwitchProps } from 'react-native';
export type SwitchType = {
    disabledTrackColor?: string;
    enabledTrackColor?: string;
    enabledThumbColor?: string;
    disabledThumbColor?: string;
} & SwitchProps;
declare const _default: React.ForwardRefExoticComponent<{
    disabledTrackColor?: string | undefined;
    enabledTrackColor?: string | undefined;
    enabledThumbColor?: string | undefined;
    disabledThumbColor?: string | undefined;
} & SwitchProps & React.RefAttributes<SwitchProps>>;
export default _default;
