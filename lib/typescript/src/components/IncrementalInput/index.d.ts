import React from 'react';
import { TextInputProps } from 'react-native';
import { ContainerType } from '../Container';
export type IncrementalInputType = {
    minValue?: number;
    maxValue?: number;
    stepValue?: number;
    disabled?: boolean;
} & ContainerType & TextInputProps;
export default function IncrementalInput(props: IncrementalInputType): React.JSX.Element;
