// declaration.d.ts
/// <reference types="nativewind/types" />
declare module '*.scss';
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
