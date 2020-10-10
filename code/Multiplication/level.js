import React from 'react';
import Level from '../components/level';
export default function MulLevel({ navigation }) {
    return <Level navigation={navigation} levels={[ 5, 10, 12 ]} />;
}
