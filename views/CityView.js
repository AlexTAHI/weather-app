import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import loadFonts from "../assets/fonts/font";

export default class CityView extends React.Component {
    // Etat du composant
    state = {
        fontsLoaded: false,
    };
    // Appel avant le montage du composant
    componentDidMount() {
        loadFonts();
    }
    // Rendu du composant
    render() {
        const now = new Date(); // Date d'aujourd'hui
        // Affichage de la vue
        return (
            <View style={styles.view}>
                <StatusBar style='light'/>
                <View style={styles.header}>
                    <Text style={styles.searchText}> Rechercher une ville</Text>
                </View>

                


            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#101014',
        alignItems: 'center',
        padding: 15,
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        //backgroundColor: '#3d3d3d',
        borderRadius: 20,
        marginTop: 30,
    },
    searchText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
    },
});