import React from 'react';
import Level from '../components/level';
export default function subLevel({ navigation }) {
    return <Level navigation={navigation} levels={[ 5, 10, 20, 50, 100, 500 ]} />;
}
