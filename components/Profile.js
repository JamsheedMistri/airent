import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

export default function Profile() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name="Profile" component={ProfileContent} />
		</Stack.Navigator>
	);
}

const ProfileContent = ({ navigation }) => {
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

	return (
		<></>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 50,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	input: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#aaaaaa',
		backgroundColor: 'white',
		padding: 10,
		marginBottom: 10,
		fontSize: 25,
		textAlign: 'center',
	},
	button: {
		borderRadius: 5,
		backgroundColor: '#4257b2',
		padding: 15,
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
});
