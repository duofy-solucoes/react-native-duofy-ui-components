import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../Text';
import {ButtonType} from './Button.type';
import {getStyles} from './styles';

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
