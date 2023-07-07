import React, { useState } from 'react';
import {
	Button,
	StyleSheet,
	TextInput,
	View,
	Modal,
	Image,
} from 'react-native';

interface GoalInputProps {
	onAddGoal: (enteredGoalText: string) => void;
	visible: boolean;
	setVisible: (visible: boolean) => void;
}

const GoalInput = (props: GoalInputProps) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
		props.setVisible(false);
	};

	const cancelGoalHandler = () => {
		props.setVisible(false);
	};

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					style={styles.textInput}
					value={enteredGoalText}
					placeholder='Your Course Goal'
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Cancel' onPress={cancelGoalHandler} color='#f31282' />
					</View>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} color='#b180f0'/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		marginTop: 10,
		flexDirection: 'row',
	},
	button: {
		width: '30%',
		marginHorizontal: 5,
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
});

export default GoalInput;
