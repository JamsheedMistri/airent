import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateNewTrip from './CreateNewTrip'
import SelectCar from './SelectCar'

export default function NewTrip() {
	const Stack = createStackNavigator()
	return (
		<Stack.Navigator>
			<Stack.Screen name="New Trip" component={CreateNewTrip} />
			<Stack.Screen name="Select a Car" component={SelectCar} />
		</Stack.Navigator>
	)
}
