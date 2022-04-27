import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const TripDetail = ({ navigation, route }) => {
	const { trips, dummyCarData } = useContext(GlobalContext)
	const {
		carId,
		sourceAirport,
		destinationAirport,
		leaseOwnCar,
		needsRentalCar,
		departureDate,
		returnDate,
	} = trips[route.params.idx]

	var carData
	if (carId !== null) carData = dummyCarData.filter((car) => car.id == carId)[0]

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{sourceAirport} > {destinationAirport}
			</Text>
			<Text style={styles.date}>
				{departureDate} - {returnDate}
			</Text>
			{leaseOwnCar && <Text>Leasing own car at {sourceAirport}</Text>}
			{needsRentalCar && <Text>Renting a car at {destinationAirport}</Text>}
			{carId && <Text>Car: {carData.name}</Text>}
			<Text style={styles.securityMessage}>
				Airent has securely generated cryptographic keys for your trip. Your trip is secure and you
				are the only one physically able to open the kiosk.
			</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>
					<Ionicons name={'ios-lock-closed'} size={20} /> Begin Secure Unlock
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 30,
	},
	date: {
		fontSize: 15,
		marginBottom: 10,
	},
	securityMessage: {
		color: 'green',
		textAlign: 'center',
		marginTop: 20,
	},
	button: {
		borderRadius: 5,
		backgroundColor: '#0a84ff',
		padding: 10,
		marginTop: 20,
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
})

export default TripDetail
