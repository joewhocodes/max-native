import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder='Your Course Goal' />
                <Button title='Add Goal' />
			</View>
            <View style={styles.goalsContainer}>
                <Text>List of goals</Text>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
	},
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '70%',
        marginRight: 10,
        padding: 10,
    },
    goalsContainer: {
        flex: 4,
    }
});
