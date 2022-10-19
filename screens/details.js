import React, { useEffect, useState } from 'react'
import {Text, View} from 'react-native'
import * as Location from 'expo-location'
import { LoadingView } from './map'
import { Headline, Title } from 'react-native-paper'
import styles from './styles'

const Details = (props) => {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState({});


    const getAddress = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Location permissions denied');
            setLoading(false);
            return;
        }
        let {coords} = props.route.params;
        let addr = await Location.reverseGeocodeAsync(coords);
        setAddress(addr[0])
        setLoading(false);
    }

    useEffect(() => {
        getAddress()
    }, [])

    if (loading) {
        return <LoadingView />
    }

    return (
        <View style={styles.details}>
            <Title>{props.route.params.username}</Title>
            {Object.entries(address).map(key => (
                <View style={styles.details} key={key}>
                    <Headline key={key}>{key[0]}:</Headline> 
                    <Text style={styles.text}>{key[1]}</Text>
                </View>
            ))}

        </View>
    )
}

export default Details;