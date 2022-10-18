import React from 'react'
import {Text} from 'react-native'

const MapScreen = (props) => {
    return (
        <Text>{props.route.params.username}</Text>
    )
}

export default MapScreen;