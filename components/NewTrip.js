import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function NewTrip() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name="New Trip" component={NewTripContent} />
		</Stack.Navigator>
	);
}

const NewTripContent = ({ navigation }) => {
	//const { decks, createDeck } = useContext(GlobalContext);
	//const [newDeckText, setNewDeckText] = useState('');

	/*const submitDeck = () => {
		if (newDeckText == '') {
			alert('Please enter a valid deck name!');
			return;
		} else if (newDeckText in decks) {
			alert(
				'A deck with that name already exists, please choose another deck name.'
			);
			return;
		}

		createDeck(newDeckText);
		setNewDeckText('');
		navigation.navigate('Deck Detail', { deckName: newDeckText });
	};*/

	const [leaseOwnCar, setLeaseOwnCar] = useState(false);
	const [needsRentalCar, setNeedsRentalCar] = useState(false);

	return (
		<>
			<View style={styles.container}>
				<View style={styles.checkboxContainer}>
					<CheckBox
						value={leaseOwnCar}
						onValueChange={setLeaseOwnCar}
						style={styles.checkbox}
					/>
					<Text style={styles.label}>Do you like React Native?</Text>
				</View>
				<Text>Is CheckBox selected: {leaseOwnCar ? "👍" : "👎"}</Text>
			</View>
			<Text>Destination Airport</Text>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
	},
});
