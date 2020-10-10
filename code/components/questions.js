import React, { useState, useRef, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Animated } from 'react-native';

export default function Question({ route, operation }) {
    const [ points, setPoints ] = useState(0);
    const [ inputValue, setInputValue ] = useState('');
    const [ firstNum, setFirstNum ] = useState(0);
    const [ secNum, setSecNum ] = useState(0);
    const [ pointsAdded, setPointsAdded ] = useState(10);

    const timesBy = route.params.times;

    const generateRandomNumForSub = () => {
        const [ sortedFirstNum, sortedSecondNum ] = [
            Math.ceil(Math.random() * timesBy),
            Math.ceil(Math.random() * timesBy),
        ]
            .sort((a, b) => a - b)
            .reverse();
        setFirstNum(sortedFirstNum);
        setSecNum(sortedSecondNum);
    };
    const generateRandomNumForDiv = () => {
        let sortedFirstNum = Math.ceil(Math.random() * timesBy);
        let sortedSecondNum = Math.ceil(Math.random() * timesBy);
        while (!Number.isInteger(sortedFirstNum / sortedSecondNum) || sortedFirstNum === 0 || sortedSecondNum === 0) {
            sortedFirstNum = Math.ceil(Math.random() * timesBy);
            sortedSecondNum = Math.ceil(Math.random() * timesBy);
        }
        const [ FirstNum, SecondNum ] = [ sortedFirstNum, sortedSecondNum ].sort((a, b) => a - b).reverse();
        setFirstNum(FirstNum);
        setSecNum(SecondNum);
    };
    const generateRandomNum = () => {
        if (operation === '-') {
            generateRandomNumForSub();
            return;
        }
        if (operation === '/') {
            generateRandomNumForDiv();
            return;
        }
        setFirstNum(Math.ceil(Math.random() * timesBy));
        setSecNum(Math.ceil(Math.random() * timesBy));
    };

    useEffect(() => {
        generateRandomNum();
    }, []);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const onSubmit = () => {
        if (Number(inputValue) == eval(`${firstNum} ${operation} ${secNum}`)) {
            setPoints(points + pointsAdded);
            if (Number.isInteger((points + pointsAdded) / 100) && points !== 0) {
                fadeIn();
                setPointsAdded(pointsAdded * 2);
            }
        }
        setInputValue('');
        generateRandomNum();
    };

    const getRewarded = () => {
        fadeOut();
        setPoints(points * 2);
    };

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 20 }}>
                {firstNum} {operation === '*' ? 'x' : operation === '/' ? '÷' : operation} {secNum}
            </Text>
            <View
                style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}
            >
                <Input
                    placeholder="answer..."
                    onSubmitEditing={() => onSubmit()}
                    onChangeText={setInputValue}
                    value={inputValue}
                />
            </View>
            <Text style={{ alignSelf: 'flex-start', marginLeft: 20 }}>⭐️ {points}</Text>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        opacity: fadeAnim,
                    },
                ]}
            >
                <Text style={styles.fadingText}>
                    X2 ⭐️
                    {'\n'}
                    {'\n'}
                    <Button title="OK" style={{ width: 100 }} onPress={getRewarded} />
                </Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        width: 60,
        padding: 10,
    },
    title: {
        fontSize: 40,
        textDecorationLine: 'underline',
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'powderblue',
    },
    fadingText: {
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});
