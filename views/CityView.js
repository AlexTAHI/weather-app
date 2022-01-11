import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import SearchBar from "react-native-platform-searchbar";
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
        // Affichage de la vue
        return (
            <View style={styles.view}>
                <StatusBar style='light'/>
                <View style={styles.header}>
                    <Text style={styles.searchText}> Rechercher une ville</Text>
                    <SearchBar inputStyle={styles.searchBar} placeholder='Rechercher...'/>
                </View>

                <View style={styles.body}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={styles.worldMapBox}>
                            <Image style={styles.worldMap} source={require('../assets/img/png/world-map-update.png')}/>
                            <View style={styles.insideWorldMapBox}>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                                <View style={styles.cityBox}>
                                    <Text style={styles.searchText}> Ville 1</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
        flex: 0.6,
        alignItems: 'center',
        width: '100%',
        height: 70,
        //backgroundColor: 'red',
        borderRadius: 20,
        marginTop: 30,
    },
    searchText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        marginBottom: 35,
    },
    searchBar: {
        width: '90%',
        height: 60,
        backgroundColor: '#3d3d3d',
        borderRadius: 30,
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 18,
        alignItems: 'center',
    },
    body: {
        flex: 3,
        width: '100%',
        height: '100%',
        //backgroundColor: 'green',
    },
    contentContainer: {
        height: '100%',
        backgroundColor: 'green',

    },
    worldMapBox: {
        width: '100%',
        //height: 'max-content',
    },
    worldMap: {
        position: 'absolute',
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        tintColor: '#333',
    },
    insideWorldMap: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityBox: {
        backgroundColor: '#999',
        width: '50%',
        height: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});