import React from 'react';
import Level from '../components/level';

export default function addLevels({ navigation }) {
    return <Level navigation={navigation} levels={[ 5, 20, 35, 50, 100, 250 ]} />;
}
