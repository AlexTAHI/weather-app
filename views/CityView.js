import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View, Image, ScrollView, LogBox } from 'react-native';
import SearchBar from "react-native-platform-searchbar";
import Ionicons from 'react-native-vector-icons/Ionicons';
import loadFonts from "../assets/fonts/font";
const cityList = require('../components/cities.json');

export default class CityView extends React.Component {
    // Etat du composant
    state = {
        fontsLoaded: false,
        cities: [],

    };
    // Obtenir la météo d'une ville
    getWeather() {
        axios.get(API_LINK + 'q=' + this.state.city + '&appid=' + API_KEY + '&units=metric&lang=FR')
            .then(response => {
                console.log(response.data.main.temp);
                this.setState({
                    temp: Math.round(response.data.main.temp),
                    time: response.data.weather[0].description,
                    humidity: response.data.main.humidity,
                    pressure: response.data.main.pressure,
                    wind: response.data.wind.speed,
                    visibility: Math.round(response.data.visibility / 1000),
                    weatherIcon: <WeatherIcon name={response.data.weather[0].description} style={styles.weatherIcon} />,
                });
            })
            .catch(error => {
                console.error("Cette ville n'existe pas");
            });
    }
    // Appel avant le montage du composant
    componentDidMount() {
        loadFonts();
        this.setState({ cities: cityList });
        /*
        for (let i = 0; i < 13; i++) {
            this.state.cities.push(
                {
                    'name': 'Paris',
                    'temperature': 13,
                    'time': 'Thunder'
                },
            );
        }*/
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]); // Désactiver l'avertissement du ScrollView
    }
    // Rendu du composant
    render() {
        // Affichage de la vue
        return (
            <View style={styles.view}>
                <StatusBar style='light'/>
                <View style={styles.header}>
                    <Text style={styles.searchText}> Rechercher une ville</Text>
                    <SearchBar
                        inputStyle={styles.searchBar}
                        placeholder='Rechercher'
                        leftIcon={
                            <Ionicons name="search" size={20} color="white" />
                        }
                    />
                </View>

                <View style={styles.body}>

                        <View style={styles.worldMapBox}>
                            <Image style={styles.worldMap} source={require('../assets/img/png/world-map-update.png')}/>
                            <View style={styles.insideWorldMapBox}>

                                <ScrollView contentContainerStyle={styles.contentContainer}>
                                    <FlatList
                                        //contentContainerStyle={styles.contentContainer}
                                        data={this.state.cities}
                                        numColumns={2}
                                        keyExtractor={(item, index) => index.toString()}
                                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                                        ListHeaderComponent={
                                                <Text style={styles.historicTitle}>Historique des recherches</Text>
                                            }
                                        renderItem={({ item, index }) => (
                                                    <View style={styles.cityBox}>
                                                        <Text style={styles.cityName}>{item.name}</Text>

                                                        <Image style={styles.weatherIcon} source={require('../assets/img/weather/thunder.png')} />

                                                        <View style={styles.tempTime}>
                                                            <View style={styles.tempBox}>
                                                                <Text style={styles.temperature}>{item.temperature}</Text>
                                                                <Text style={styles.celsius}>°</Text>
                                                            </View>
                                                            <Text style={styles.time}>{item.time}</Text>
                                                        </View>

                                                    </View>
                                                )
                                            }
                                    />
                                </ScrollView>

                            </View>
                        </View>
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
        marginBottom: 20,
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
    historicTitle: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        marginBottom: 5,
        textAlign: 'center',
    },
    body: {
        flex: 3,
        width: '100%',
        height: '100%',
        //backgroundColor: 'green',
    },
    contentContainer: {
        height: '97%',
        //backgroundColor: 'green',

    },
    worldMapBox: {
        width: '100%',
        //height: '100%',
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
        backgroundColor: '#1f1f21',
        width: '48%',
        height: 180,
        borderRadius: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        marginBottom: 15,
    },
    cityName: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
    },
    tempTime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tempBox: {
        flexDirection: 'row',
        marginRight: 15,
    },
    temperature: {
        fontFamily: 'SplineSans-SemiBold',
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 30,
    },
    celsius: {
        fontFamily: 'SplineSans',
        color: '#f9d65d',
        fontSize: 30,
    },
    time: {
        fontFamily: 'SplineSans',
        color: '#808082',
        backgroundColor: 'transparent',
        fontSize: 20,
    },
    weatherIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});