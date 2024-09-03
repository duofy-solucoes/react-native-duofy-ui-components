import React from 'react';
import { ViewProps } from 'react-native';
export type DividerType = {
    text?: string;
    size?: number;
    customTw?: string;
} & ViewProps;
declare function Divider(props: DividerType): React.JSX.Element;
export default Divider;
