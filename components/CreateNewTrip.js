import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, Switch, TextInput, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker'

const CreateNewTrip = ({ navigation }) => {
	const { newTrip } = useContext(GlobalContext)

	const [sourceAirport, setSourceAirport] = useState('')
	const [destinationAirport, setDestinationAirport] = useState('')
	const [leaseOwnCar, setLeaseOwnCar] = useState(false)
	const [needsRentalCar, setNeedsRentalCar] = useState(false)
	const toggleLeaseOwnCar = () => setLeaseOwnCar(!leaseOwnCar)
	const toggleNeedsRentalCar = () => setNeedsRentalCar(!needsRentalCar)
	const [departureDate, setDepartureDate] = useState('')
	const [returnDate, setReturnDate] = useState('')
	const continueButtonPressed = () => {
		const data = {
			sourceAirport,
			destinationAirport,
			leaseOwnCar,
			needsRentalCar,
			departureDate,
			returnDate,
		}
		setSourceAirport('')
		setDestinationAirport('')
		setLeaseOwnCar(false)
		setNeedsRentalCar(false)
		setDepartureDate('')
		setReturnDate('')

		if (needsRentalCar) navigation.navigate('Select a Car', { data })
		else finishButtonPressed()
	}
	const finishButtonPressed = () => {
		newTrip(
			null,
			sourceAirport,
			destinationAirport,
			leaseOwnCar,
			needsRentalCar,
			departureDate,
			returnDate
		)

		setSourceAirport('')
		setDestinationAirport('')
		setLeaseOwnCar(false)
		setNeedsRentalCar(false)
		setDepartureDate('')
		setReturnDate('')

		alert('Successfully scheduled trip. View more information in the "My Trips" tab.')
	}

	return (
		<View style={styles.container}>
			<View style={styles.airportRow}>
				<View style={styles.airportContainer}>
					<Text>Source Airport</Text>
					<TextInput
						style={styles.airportInput}
						onChangeText={setSourceAirport}
						value={sourceAirport}
						autoCapitalize={'characters'}
						autoCorrect={false}
						maxLength={3}
					/>
				</View>
				<View style={styles.airportContainer}>
					<Text>Destination Airport</Text>
					<TextInput
						style={styles.airportInput}
						onChangeText={setDestinationAirport}
						value={destinationAirport}
						autoCapitalize={'characters'}
						autoCorrect={false}
						maxLength={3}
					/>
				</View>
			</View>
			<View style={styles.datePickerRow}>
				<Text>Select your departure date</Text>
				<DatePicker
					style={styles.datePicker}
					date={departureDate}
					mode="date"
					placeholder="Tap to Select"
					format="MM/DD/YYYY"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
						dateIcon: {
							display: 'none',
						},
						dateInput: {
							borderWidth: 0,
						},
					}}
					onDateChange={setDepartureDate}
				/>
			</View>
			<View style={styles.datePickerRow}>
				<Text>Select your return date</Text>
				<DatePicker
					style={styles.datePicker}
					date={returnDate}
					mode="date"
					placeholder="Tap to Select"
					format="MM/DD/YYYY"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
						dateIcon: {
							display: 'none',
						},
						dateInput: {
							borderWidth: 0,
						},
					}}
					onDateChange={setReturnDate}
				/>
			</View>
			<View style={styles.switchRow}>
				<Text style={styles.switchLabel}>
					{sourceAirport ? `Lease your car at ${sourceAirport}?` : 'Lease your car?'}
				</Text>
				<Switch onValueChange={toggleLeaseOwnCar} value={leaseOwnCar} />
			</View>
			<View style={styles.switchRow}>
				<Text style={styles.switchLabel}>
					{destinationAirport ? `Rent a car at ${destinationAirport}?` : 'Rent a car?'}
				</Text>
				<Switch onValueChange={toggleNeedsRentalCar} value={needsRentalCar} />
			</View>
			{!!sourceAirport &&
				!!destinationAirport &&
				!!departureDate &&
				!!returnDate &&
				(leaseOwnCar || needsRentalCar) && (
					<TouchableOpacity style={styles.button} onPress={continueButtonPressed}>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
				)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
	},
	airportRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingBottom: 10,
	},
	airportContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	switchRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
	},
	airportInput: {
		padding: 10,
		backgroundColor: 'white',
		marginTop: 5,
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#efefef',
		fontSize: 40,
		textAlign: 'center',
		width: 150,
	},
	switchLabel: {
		fontSize: 20,
	},
	datePickerRow: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 20,
	},
	datePicker: {
		padding: 5,
		backgroundColor: 'white',
		marginTop: 5,
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#efefef',
		fontSize: 40,
		textAlign: 'center',
		width: '100%',
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

export default CreateNewTrip
