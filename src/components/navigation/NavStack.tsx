import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Gallery from '../../screens/Gallery';
import NavBar from './NavBar';
import { NavStackParamList } from '../../navigation/navigation';

const Stack = createStackNavigator<NavStackParamList>();

export const NavStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{header: () => <NavBar />}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Gallery' component={Gallery} />
        </Stack.Navigator>
    )
}