import React from 'react'
import { View, ActivityIndicator, Image } from 'react-native'
import logo from '../logo.png';

const Splash = ({ loader }) => {
    return (
        <View style={
            loader ? 
            {
                top: 0,
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                position: "absolute",
                justifyContent: 'center',
                backgroundColor: '#3c3241',
            }
            :
            {
                display: "none"
            }
        }>
            <View>
                <Image source={logo} style={
                    loader ?
                    {
                        height: 80,
                        width: 80,
                        marginBottom: 25
                    }
                    :
                    {
                        height: 0,
                        width: 0,
                    }
                } />
                <ActivityIndicator size="small" color="white" />
            </View>
        </View>
    )
}

export default Splash;