import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Text from '../Text';
import {getStyles} from './styles';

type ButtonType = {
  text: string;
  variant?: string;
  color?: string;
} & TouchableOpacityProps;

export default function Button(props: ButtonType) {
  const {text, variant = 'primary', ...rest} = props;
  const style = getStyles({variant});

  return (
    <TouchableOpacity testID="button-component" {...rest} style={style.base}>
      <Text
        color={style.textColor}
        weight="medium"
        size="regular"
        text={text}
      />
    </TouchableOpacity>
  );
}
