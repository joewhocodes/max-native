import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface GoalInputProps {
	onAddGoal: (enteredGoalText: string) => void;
}

const GoalInput = (props: GoalInputProps) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText;
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				value={enteredGoalText}
				placeholder='Your Course Goal'
				onChangeText={goalInputHandler}
			/>
			<Button title='Add Goal' onPress={addGoalHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
