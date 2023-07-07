import { View, Text, StyleSheet } from 'react-native';

interface GoalItemProps {
	text: string;
}

const GoalItem = (props: GoalItemProps) => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{props.text}</Text>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#5e0acc',
		borderColor: 'black',
		borderWidth: 1,
	},
	goalText: {
		color: 'white',
	},
});
