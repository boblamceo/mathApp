import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { backgroundThemes, buttonThemes } from '../data';

export default function Level({ navigation, levels }) {
    const [ color, setColor ] = useState('#1EC3FC');
    const [ backgroundColor, setBackColor ] = useState('#2d81da');
    return (
        <View
            style={{
                flex: 1,
                backgroundColor,
                alignItems: 'center',
            }}
        >
            {/* buttons */}
            <View
                style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}
            >
                {levels.map((times, index) => (
                    <Button
                        title={`${index + 1}`}
                        style={styles.button}
                        onPress={() => navigation.navigate('Questions', { times })}
                        buttonStyle={{ backgroundColor: color }}
                        key={index}
                    />
                ))}
            </View>
            <View
                style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    flex: 1,
                    marginTop: '120%',
                }}
            >
                <DropDownPicker
                    items={backgroundThemes}
                    defaultValue={backgroundColor}
                    containerStyle={{ height: 40, marginHorizontal: 50 }}
                    style={{ backgroundColor: '#fafafa', flex: 1, width: 100 }}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa', flex: 1 }}
                    onChangeItem={(item) => setBackColor(item.value)}
                />
                <DropDownPicker
                    items={buttonThemes}
                    defaultValue={color}
                    containerStyle={{ height: 40, marginHorizontal: 50 }}
                    style={{ backgroundColor: '#fafafa', flex: 1, width: 100 }}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={(item) => setColor(item.value)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        padding: 15,
    },
    title: {
        marginTop: 20,
        fontSize: 40,
        textDecorationLine: 'underline',
    },
});
