import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../views/HomeView";
import CityView from "../views/CityView";
import FavorisView from "../views/FavorisView";
import SearchView from "../views/SearchView";

const Stack = createStackNavigator();

class ViewManager extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Accueil">
                <Stack.Screen name="Accueil" component={HomeView}/>
                <Stack.Screen name="Villes" component={CityView}/>
                <Stack.Screen name="Favoris" component={FavorisView}/>
                <Stack.Screen name="FicheVille" component={SearchView}/>
            </Stack.Navigator>
        );
    }
}