import {TextProps} from 'react-native';

export interface TextType extends TextProps {
  text: string;
  size?: string;
  brandColor?: string;
  opacity?: string;
  color?: string;
  weight?: string;
  customClasses?: string;
}
