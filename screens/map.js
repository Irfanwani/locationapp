import React, { useEffect } from 'react'
import {View} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import styles from './styles'


const MapScreen = (props) => {
    useEffect(() => {

    }, [])

    return (
        <View>
            <MapView style={styles.map} initialRegion={{latitude: 80, longitude: 20, latitudeDelta: 50, longitudeDelta: 50}}>
                <Marker coordinate={{latitude: 80, longitude: 20}} />
            </MapView>
        </View>
    )
}

export default MapScreen;