import {TouchableOpacityProps} from 'react-native';

export interface ButtonType extends TouchableOpacityProps {
  text: string;
  variant?: string;
  color?: string;
}
