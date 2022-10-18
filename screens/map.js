import React, { useEffect, useState } from 'react'
import {View} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import styles from './styles'

import * as Location from 'expo-location'
import { ActivityIndicator, FAB } from 'react-native-paper'

const MapScreen = (props) => {
    const [coords, setCoords] = useState({latitude: 0, longitude: 0});
    const [loading, setLoading] = useState(true);

    const getLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Location permissions were denied.');
            setLoading(false);
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const {latitude, longitude} = location.coords;
        setCoords({latitude, longitude});
        setLoading(false);
    }
    useEffect(() => {
            getLocation()
    }, [])

    const showAddress = () => {
        props.navigation.navigate('Details', {coords, username: props.route.params.username})
    }

    if(loading) {
        return <LoadingView />
    }
    return (
        <View>
            <MapView style={styles.map} region={{latitude: coords.latitude, longitude: coords.longitude, longitudeDelta: 50, latitudeDelta: 50}}>
                <Marker coordinate={{latitude: coords.latitude, longitude: coords.longitude}} />
            </MapView>
            <FAB label='Show address' style={styles.fab} color='cyan' onPress={showAddress} />
        </View>
    )
}

export default MapScreen;


export const LoadingView = () => {
    return (
        <View style={styles.indicator}>
            <ActivityIndicator size='large' color='teal' />
        </View>
    )
}