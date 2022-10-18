import React from 'react'
import {Text, View} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import styles from './styles'


const MapScreen = (props) => {
    return (
        <View>
            <MapView style={styles.map}>

            </MapView>
        </View>
    )
}

export default MapScreen;