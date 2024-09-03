import React from 'react';
import { ScrollViewProps } from 'react-native';
export type ScrollableContainerType = {
    customTw?: string;
} & ScrollViewProps;
declare function ScrollableContainer(props: ScrollableContainerType): React.JSX.Element;
export default ScrollableContainer;
