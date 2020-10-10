import React from 'react';
import Level from '../components/level';
export default function divLevel({ navigation }) {
    return <Level navigation={navigation} levels={[ 25, 100, 144 ]} />;
}
