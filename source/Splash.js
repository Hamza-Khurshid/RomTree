import React from 'react'
import { View, ActivityIndicator, Image } from 'react-native'
import logo from '../logo.png';

const Splash = () => {
    return (
        <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3c3241',
        }}>
            <View>
                <Image source={logo} style={{
                    height: 80,
                    width: 80,
                    marginBottom: 25
                }} />
                <ActivityIndicator size="small" color="white" />
            </View>
        </View>
    )
}

export default Splash;