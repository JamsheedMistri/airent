import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'
import TripList from './TripList'
import TripDetail from './TripDetail'

export default function MyTrips() {
	const Stack = createStackNavigator()
	return (
		<Stack.Navigator>
			<Stack.Screen name="My Trips" component={TripList} />
			<Stack.Screen
				name="Trip Detail"
				component={TripDetail}
				options={({ route }) => ({ title: route.params.title })}
			/>
		</Stack.Navigator>
	)
}
