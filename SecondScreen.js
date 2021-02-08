import React, { useLayoutEffect, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, BackHandler } from 'react-native';

const StyledView = styled.View`
    padding: 10px;
`;


export default function SecondScreen({ route, navigation }) {
    const close = () => {
        navigation.goBack(null);
        return true;
    }


    useEffect(() => {
        if (route.params?.message) {
            alert(route.params.message);
        }
        BackHandler.addEventListener('hardwareBackPress', close);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', close);
        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
        })
    }, []);


    return (
        <StyledView>
            <Text>SecondScreen</Text>
        </StyledView>
    );
}
