import React, { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
	const [trips, setTrips] = useState([])

	const newTrip = (
		carId,
		sourceAirport,
		destinationAirport,
		leaseOwnCar,
		needsRentalCar,
		departureDate,
		returnDate
	) => {
		setTrips([
			...trips,
			{
				carId,
				sourceAirport,
				destinationAirport,
				leaseOwnCar,
				needsRentalCar,
				departureDate,
				returnDate,
			},
		])
	}

	const dummyCarData = [
		{
			id: 1,
			name: 'Honda Accord',
			renter: 'Jimmy Fallon',
			rating: 4.6,
			dailyPrice: 50,
			image: 'https://i.imgur.com/lpAY3zU.jpg',
		},
		{
			id: 2,
			name: 'Tesla Model 3',
			renter: 'LeBron James',
			rating: 4.8,
			dailyPrice: 60,
			image: 'https://i.imgur.com/Pij95Ui.jpg',
		},
		{
			id: 3,
			name: 'Toyota Corolla',
			renter: 'Candice Collins',
			rating: 3.6,
			dailyPrice: 30,
			image: 'https://i.imgur.com/PmjnC9S.jpg',
		},
	]

	return (
		<GlobalContext.Provider
			value={{
				trips,
				newTrip,
				dummyCarData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
