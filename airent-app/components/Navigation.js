import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import NewTrip from './NewTrip'
import MyTrips from './MyTrips'
import Profile from './Profile'

const Navigation = () => {
	const Tab = createBottomTabNavigator()

	const iconName = (routeName) => {
		switch (routeName) {
			case 'New Trip':
				return 'ios-car'
			case 'My Trips':
				return 'ios-airplane'
			case 'Profile':
				return 'ios-person-circle'
			default:
				return 'ios-alert-circle'
		}
	}

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						return <Ionicons name={iconName(route.name)} size={size} color={color} />
					},
				})}
			>
				<Tab.Screen name="New Trip" component={NewTrip} options={{ headerShown: false }} />
				<Tab.Screen name="My Trips" component={MyTrips} options={{ headerShown: false }} />
				<Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
