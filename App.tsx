import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState<string[]>([]);

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals(currentCoarseGoals => [
			...currentCoarseGoals,
			enteredGoalText,
		]);
        setEnteredGoalText('');
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
                    value={enteredGoalText}
					placeholder='Your Course Goal'
					onChangeText={goalInputHandler}
				/>
				<Button title='Add Goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				{courseGoals.map((goal, index) => (
					<Text key={goal}>{goal}</Text>
				))}
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
	},
});
