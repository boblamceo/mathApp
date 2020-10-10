import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import addQuestions from './Addition/questions';
import addLevels from './Addition/level';
import Choose from './choose';
import subLevel from './Subtraction/level';
import subQuestions from './Subtraction/questions';
import MulLevel from './Multiplication/level';
import MulQuestions from './Multiplication/questions';
import divLevel from './Division/level';
import divQuestions from './Division/questions';

const Stack = createStackNavigator();

const AddNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Levels" component={addLevels} />
            <Stack.Screen name="Questions" component={addQuestions} />
        </Stack.Navigator>
    );
};
const SubNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Levels" component={subLevel} />
            <Stack.Screen name="Questions" component={subQuestions} />
        </Stack.Navigator>
    );
};

const MulNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Levels" component={MulLevel} />
            <Stack.Screen name="Questions" component={MulQuestions} />
        </Stack.Navigator>
    );
};

const DivNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Levels" component={divLevel} />
            <Stack.Screen name="Questions" component={divQuestions} />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Choose" component={Choose} />
                <Stack.Screen name="Addition" component={AddNavigator} />
                <Stack.Screen name="Subtraction" component={SubNavigator} />
                <Stack.Screen name="Multiplication" component={MulNavigator} />
                <Stack.Screen name="Division" component={DivNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
