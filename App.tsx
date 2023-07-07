import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState<any[]>([]);

	const addGoalHandler = (enteredGoalText: string) => {
		setCourseGoals(currentCoarseGoals => [
			...currentCoarseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};

	const deleteGoalHandler = (id: string) => {
		setCourseGoals(currentCoarseGoals => {
			return currentCoarseGoals.filter((goal: any) => goal.id !== id);
		});
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={itemData => {
						return (
							<GoalItem
								onDeleteGoal={deleteGoalHandler}
								text={itemData.item.text}
								id={itemData.item.id}
							/>
						);
					}}
					keyExtractor={(item, index) => item.id}
				/>
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
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
	},
});
