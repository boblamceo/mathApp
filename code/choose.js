import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';
import { backgroundThemes, buttonThemes } from './data';

const Choose = ({ navigation }) => {
    const [ color, setColor ] = useState('#1EC3FC');
    const [ backgroundColor, setBackColor ] = useState('#2d81da');
    return (
        <View style={{ backgroundColor, flex: 1 }}>
            <Button
                title="Addition"
                onPress={() => navigation.navigate('Addition')}
                buttonStyle={{ backgroundColor: color }}
                style={{
                    margin: 5,
                    marginTop: 50,
                }}
            />
            <Button
                title="Subtraction"
                onPress={() => navigation.navigate('Subtraction')}
                buttonStyle={{ backgroundColor: color }}
                style={{
                    margin: 5,
                }}
            />
            <Button
                title="Multiplication"
                onPress={() => navigation.navigate('Multiplication')}
                buttonStyle={{ backgroundColor: color }}
                style={{
                    margin: 5,
                }}
            />
            <Button
                title="Division"
                onPress={() => navigation.navigate('Division')}
                buttonStyle={{ backgroundColor: color }}
                style={{
                    margin: 5,
                }}
            />
            <View
                style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    marginTop: '10%',
                }}
            >
                <DropDownPicker
                    items={backgroundThemes}
                    defaultValue={backgroundColor}
                    containerStyle={{ height: 40, marginHorizontal: 50, width: 100 }}
                    style={{ backgroundColor: '#fafafa', flex: 1 }}
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
};

export default Choose;
