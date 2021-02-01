import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const StyledView = styled.View`
    padding: 10px;
`;

const StyledButton = styled(AntDesign)`
    margin-right: 5px;
    padding: 4px;
`;


export default function HomeScreen({ navigation }) {

        const [message, setMessage] = useState('Test')


    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
            headerRight: () => (
                <StyledButton
                name='arrowright'
                size={24}
                onPress={() => navigation.navigate('Second', {message: message})}
                />
            )
        })

    }, [message])
    return (
        <StyledView>
            <Text>Homescreen</Text>
            <TextInput
                onChangeText={(text) => setMessage(text)}
                value={message}
                placeholder='Type message here'
                />
        </StyledView>
    );
}
