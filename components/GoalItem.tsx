import { View, Text, StyleSheet, Pressable } from 'react-native';

interface GoalItemProps {
	text: string;
    id: string;
    onDeleteGoal: (id: string) => void;
}

const GoalItem = (props: GoalItemProps) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
            style={({ pressed }) => pressed ? styles.pressedItem : null}
				android_ripple={{ color: 'grey' }}
				onPress={props.onDeleteGoal.bind(this, props.id)}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		marginVertical: 10,
		backgroundColor: '#5e0acc',
		borderColor: 'black',
		borderWidth: 1,
	},
    pressedItem: {
        opacity: 0.5,
    },
	goalText: {
		color: 'white',
        padding: 10,
	},
});
