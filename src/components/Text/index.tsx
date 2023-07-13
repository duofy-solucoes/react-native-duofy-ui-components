import React from 'react';
import {Text, TextProps} from 'react-native';
import {getStyles} from './styles';

type TextType = {
  text: string;
  size?: string;
  brandColor?: string;
  opacity?: string;
  color?: string;
  weight?: string;
  customClasses?: string;
} & TextProps;

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
