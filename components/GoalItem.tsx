import { View, Text, StyleSheet, Pressable } from 'react-native';

interface GoalItemProps {
	text: string;
    id: string;
    onDeleteGoal: (goalId: string) => void;
}

const GoalItem = (props: GoalItemProps) => {

    const onDeleteGoal = () => {
        props.onDeleteGoal(props.id);
    }

	return (
		<Pressable onPress={onDeleteGoal}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
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
