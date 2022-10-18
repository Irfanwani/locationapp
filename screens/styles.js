import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export const backgroundcolor = Colors.teal500;
export const headertextcolor = "white";



const styles = StyleSheet.create({
    details: {
        marginVertical: 30, 
        marginHorizontal: 10
    },
    fab: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        backgroundColor: 'teal'
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
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

