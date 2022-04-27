import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Profile() {
	const Stack = createStackNavigator()
	return (
		<Stack.Navigator>
			<Stack.Screen name="Profile" component={ProfileContent} />
		</Stack.Navigator>
	)
}

const ProfileContent = ({ navigation }) => {
	// Dummy profile data
	const name = 'Ashley'
	const profilePicture = 'https://i.imgur.com/M4egXhD.jpg'
	const rating = 4.9
	const carPhoto = 'https://i.imgur.com/8Zz4N15.jpg'

	return (
		<View style={styles.container}>
			<Image style={styles.profilePicture} source={{ uri: profilePicture }} />
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.rating}>
				{rating} <Ionicons name={'ios-star'} size={20} />
			</Text>
			<Text style={styles.myCarText}>My Car</Text>
			<Image style={styles.myCar} source={{ uri: carPhoto }} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	profilePicture: {
		borderRadius: 9999,
		width: 200,
		height: 200,
		borderColor: 'white',
		borderWidth: 5,
	},
	name: {
		fontSize: 30,
		marginTop: 10,
	},
	rating: {
		fontSize: 20,
		color: 'darkgoldenrod',
	},
	myCarText: {
		marginTop: 40,
		marginBottom: 10,
		fontSize: 20,
	},
	myCar: {
		width: 300,
		height: 300,
		borderRadius: 15,
	},
})
