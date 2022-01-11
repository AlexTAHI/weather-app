import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeView from '../views/HomeView';
import CityView from '../views/CityView';

const Tab = createBottomTabNavigator();

export default class BottomNavigationBar extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                    tabBarStyle: styles.tabBar,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    //tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        // Icône à afficher en fonction du bouton
                        if (route.name === 'Accueil') {
                            iconName = focused
                                ? 'ios-planet'
                                : 'ios-planet-outline';
                        } else if (route.name === 'Villes') {
                            iconName = focused
                                ? 'ios-flag'
                                : 'ios-flag-outline';
                        } else if (route.name === 'Favoris') {
                            iconName = focused
                                ? 'ios-heart'
                                : 'ios-heart-outline';
                        } else if (route.name === 'Options') {
                            iconName = focused
                                ? 'ios-settings'
                                : 'ios-settings-outline';
                        }
                        // Affichage de l'icône
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    })}
                >
                    <Tab.Screen name='Accueil' component={HomeView}/>
                    <Tab.Screen name='Villes' component={CityView}/>
                    <Tab.Screen name='Favoris' component={HomeView}/>
                    <Tab.Screen name='Options' component={HomeView}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 15,
        backgroundColor: '#101014',
        borderTopColor: 'transparent',
        shadowColor: 'transparent',
    },
});