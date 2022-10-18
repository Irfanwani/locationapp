import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
import Constants from "expo-constants";

export const backgroundcolor = Colors.teal500;
export const headertextcolor = "white";
export const darkbackgroundcolor = Colors.blueGrey900;

const statusbarheight = Constants.statusBarHeight + 5;

const styles = StyleSheet.create({
	tag: {
		fontFamily: "monospace",
		fontWeight: "bold",
		color: headertextcolor,
		fontSize: 20,
		marginLeft: 10,
		marginTop: 30,
	},
	start: {
		borderRadius: 30,
		padding: 5,
		overflow: "hidden",
		width: 150,
		elevation: 5,
	},
	front: {
		flex: 0.85,
		width: Dimensions.get("window").width * 1.4,
		borderBottomRightRadius: 1000,
		elevation: 3,
	},
	
	bustyle: { flexDirection: "row-reverse" },

	vstyle6: { flex: 1 },
	lgstyle: { flex: 1, borderBottomRightRadius: 1000 },

	astyle1: { position: "absolute", bottom: 40, right: 20 },

    input: {
        marginTop: 200,
        marginLeft: 100,
        borderBottomWidth: 1,
        width: 200,
    }
	
	
});

export default styles;

