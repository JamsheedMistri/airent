import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { createStackNavigator } from '@react-navigation/stack'
import {
	StyleSheet,
	Text,
	View,
	Switch,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Ionicons } from '@expo/vector-icons'

const SelectCar = ({ navigation, route }) => {
	const { newTrip, dummyCarData } = useContext(GlobalContext)

	const finishButtonPressed = (id) => {
		const {
			sourceAirport,
			destinationAirport,
			leaseOwnCar,
			needsRentalCar,
			departureDate,
			returnDate,
		} = route.params.data

		newTrip(
			id,
			sourceAirport,
			destinationAirport,
			leaseOwnCar,
			needsRentalCar,
			departureDate,
			returnDate
		)

		alert('Successfully scheduled trip. View more information in the "My Trips" tab.')
		navigation.navigate('New Trip')
	}

	return (
		<ScrollView style={styles.container}>
			{dummyCarData.map((car) => (
				<CarCard key={car.id} finishButtonPressed={finishButtonPressed} {...car} />
			))}
		</ScrollView>
	)
}

const CarCard = ({ id, name, renter, rating, dailyPrice, image, finishButtonPressed }) => {
	return (
		<TouchableOpacity style={styles.card} onPress={() => finishButtonPressed(id)}>
			<Image style={styles.cardImage} resizeMode="contain" source={{ uri: image }} />
			<Text style={styles.cardTitle}>
				{name} &bull; {rating} <Ionicons name={'ios-star'} size={20} />
			</Text>
			<Text>
				Leased by {renter} &bull; ${dailyPrice}/day
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
		overflow: 'scroll',
	},
	card: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		padding: 15,
		borderRadius: 5,
		marginBottom: 25,
	},
	cardImage: {
		width: 335,
		height: 335,
		borderRadius: 5,
	},
	cardTitle: {
		paddingTop: 10,
		fontSize: 20,
	},
})

export default SelectCar
