import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'

const TripList = ({ navigation }) => {
	const { trips, dummyCarData } = useContext(GlobalContext)

	const showTripDetail = (idx) => {
		const title = `${trips[idx].sourceAirport} > ${trips[idx].destinationAirport}`
		navigation.navigate('Trip Detail', { title, idx })
	}

	return (
		<ScrollView style={styles.container}>
			{trips.length == 0 ? (
				<Text>No upcoming trips!</Text>
			) : (
				trips.map((trip, idx) => (
					<TripCard key={idx} onPress={() => showTripDetail(idx)} {...trip} />
				))
			)}
		</ScrollView>
	)
}

const TripCard = ({
	carId,
	sourceAirport,
	destinationAirport,
	leaseOwnCar,
	needsRentalCar,
	departureDate,
	returnDate,
	onPress,
}) => {
	const { dummyCarData } = useContext(GlobalContext)
	var carData
	if (carId !== null) carData = dummyCarData.filter((car) => car.id == carId)[0]

	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Text style={styles.cardTitle}>
				{sourceAirport} > {destinationAirport}
			</Text>
			<Text style={styles.cardDate}>
				{departureDate} - {returnDate}
			</Text>
			{leaseOwnCar && <Text>Leasing own car at {sourceAirport}</Text>}
			{needsRentalCar && <Text>Renting a car at {destinationAirport}</Text>}
			{carId && <Text>Car: {carData.name}</Text>}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
	},
	card: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		padding: 15,
		borderRadius: 5,
		marginBottom: 25,
	},
	cardTitle: {
		fontWeight: 'bold',
		fontSize: 30,
	},
	cardDate: {
		fontSize: 15,
		marginBottom: 10,
	},
})

export default TripList
