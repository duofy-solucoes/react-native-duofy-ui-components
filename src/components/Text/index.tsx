import React from 'react';
import {Text} from 'react-native';
import {TextType} from './Text.type';
import {getStyles} from './styles';

export default function TextComponent(props: TextType) {
  const {
    text,
    size = 'tiny',
    weight = 'regular',
    brandColor,
    opacity,
    color,
    customClasses = '',
    ...rest
  } = props;

  const style = getStyles({
    customClasses,
    size,
    weight,
    color,
    opacity,
    brandColor,
  });

  return (
    <Text testID="text-component" {...rest} style={style?.base}>
      {text}
    </Text>
  );
}
