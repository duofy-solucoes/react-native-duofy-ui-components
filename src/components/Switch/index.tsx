import React from 'react';
import {Switch, SwitchProps} from 'react-native';

type SwitchType = {
  disabledTrackColor?: string;
  enabledTrackColor?: string;
  enabledThumbColor?: string;
  disabledThumbColor?: string;
} & SwitchProps;

export default function SwitchComponent(props: SwitchType) {
  const {
    value,
    testID,
    disabledTrackColor = 'rgba(13, 16, 16, 0.6)',
    enabledTrackColor = 'rgba(248, 195, 94, 1)',
    enabledThumbColor = '#ffffff',
    disabledThumbColor = '#ffffff',
    ...rest
  } = props;

  return (
    <Switch
      {...rest}
      testID={testID || 'switch-component'}
      trackColor={{false: disabledTrackColor, true: enabledTrackColor}}
      thumbColor={value ? enabledThumbColor : disabledThumbColor}
      value={value}
    />
  );
}
