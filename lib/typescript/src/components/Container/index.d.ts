import React from 'react';
import { ViewProps } from 'react-native';
export type ContainerType = {
    customTw?: string;
} & ViewProps;
declare function Container(props: ContainerType): React.JSX.Element;
export default Container;
