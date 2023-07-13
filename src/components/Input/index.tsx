import React, {useState} from 'react';
import {
  InputModeOptions,
  KeyboardTypeOptions,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Text from '../Text';
import {getCustomPattern, getKeyboardType, handleValidation} from './utils';
import {getStyles} from './styles';

type TextInputType = {
  caption?: string;
  label?: string;
  type?: string;
  onError?: boolean;
  onIconClick?: void;
  pattern?: string | string[] | undefined;
  moneyProperties?: {
    decimalSeparator: string;
  };
} & TextInputProps;

export default function InputComponent(props: TextInputType) {
  const {
    type = 'text',
    onError,
    onIconClick = () => {},
    onChangeText,
    onFocus,
    onBlur,
    pattern,
    label,
    caption,
    ...rest
  } = props;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const {inputType, keyboardType} = getKeyboardType(type);
  const isPasswordField = type === 'password';
  const isSearchField = type === 'search';
  const IconActive = isPasswordField || isSearchField || false;
  const customPattern = pattern || getCustomPattern(inputType);
  const iconClickFunction = isPasswordField
    ? () => setVisiblePassword(!visiblePassword)
    : onIconClick;

  const style = getStyles({onError, isValid, isActive});

  const handleChange = value => {
    setIsValid(handleValidation(value, customPattern));
    isValid && onChangeText && onChangeText(value);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsActive(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsActive(false);
    onBlur && onBlur(e);
  };

  return (
    <View style={style.inputContainer}>
      {label && (
        <Text
          customStyles={style.label}
          text={label}
          weight="medium"
          size="regular"
          brandColor="black"
          opacity="primary"
        />
      )}
      <View style={style.container}>
        <TextInput
          {...rest}
          autoCapitalize="none"
          style={style.input}
          inputMode={inputType as InputModeOptions}
          keyboardType={keyboardType as KeyboardTypeOptions}
          placeholderTextColor="rgba(13, 16, 16, .6)"
          secureTextEntry={isPasswordField && !visiblePassword}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {IconActive && (
          <TouchableOpacity style={style.icon} onPress={iconClickFunction}>
            {isPasswordField && !visiblePassword && (
              <EyeIcon color="rgba(13, 16, 16, 0.4)" />
            )}
            {isPasswordField && visiblePassword && (
              <EyeSlashIcon color="rgba(13, 16, 16, 0.4)" />
            )}
            {isSearchField && (
              <MagnifyingGlassIcon color="rgba(13, 16, 16, 0.4)" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {caption && (
        <Text
          customStyles={style.label}
          text={caption}
          weight="regular"
          size="small"
          color={onError ? 'red' : ''}
          brandColor={!onError ? 'black' : ''}
          opacity={!onError ? 'lighter' : 'dark'}
        />
      )}
    </View>
  );
}
