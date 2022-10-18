import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Colors, Text, Button } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

import * as Animatable from "react-native-animatable";

import styles, {backgroundcolor} from "./styles";


const App = (props) => {
    const [username, setName] = useState('')

	const gotoRegister = () => {
		props.navigation.navigate('Map', {username})
	};
	
	return (
		<View style={styles.vstyle6}>
			<Animatable.View
				useNativeDriver={true}
				animation="slideInDown"
				duration={600}
				style={styles.front}
			>
				<LinearGradient
					colors={[backgroundcolor, Colors.green200]}
					style={styles.lgstyle}
				>
					<Text style={styles.tag}>LocationApp</Text>
					<Animatable.View animation="pulse" useNativeDriver={true} style={styles.input}>
						<TextInput placeholder="Enter Your Name" onChangeText={setName} />
					</Animatable.View>
				</LinearGradient>
			</Animatable.View>

			<Animatable.View
				useNativeDriver={true}
				animation="bounceIn"
				style={styles.astyle1}
			>
				<LinearGradient
					colors={username.length < 3 ? [Colors.grey200, Colors.grey800] : [Colors.pink200, Colors.pink800]}
					style={styles.start}
				>
					<TouchableOpacity disabled={username.length < 3} onPress={gotoRegister}>
						<Button
							contentStyle={styles.bustyle}
							color="white"
							uppercase={false}
						>
							Show Map
						</Button>
					</TouchableOpacity>
				</LinearGradient>
			</Animatable.View>
		</View>
	);
};

export default App;