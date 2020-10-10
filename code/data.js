import React from 'react';
import { Text } from 'react-native';

export const backgroundThemes = [
    { label: 'red', value: '#bf0000', icon: () => <Text>🔴</Text> },
    { label: 'blue', value: '#2d81da', icon: () => <Text>🔵</Text> },
    { label: 'green', value: '#00a300', icon: () => <Text>🟢</Text> },
    { label: 'purp.', value: '#8a008a', icon: () => <Text>🟣</Text> },
];

export const buttonThemes = [
    { label: 'red', value: 'red', icon: () => <Text>🔴</Text> },
    { label: 'blue', value: '#1EC3FC', icon: () => <Text>🔵</Text> },
    { label: 'green', value: '#00e300', icon: () => <Text>🟢</Text> },
    { label: 'purp.', value: '#cf00b3', icon: () => <Text>🟣</Text> },
];
