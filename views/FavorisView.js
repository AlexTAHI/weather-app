import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View, Image, ScrollView, LogBox, SafeAreaView } from 'react-native';
import SearchBar from "react-native-platform-searchbar";
import Ionicons from 'react-native-vector-icons/Ionicons';
import loadFonts from "../assets/fonts/font";
import GeoDBCitiesSearch from 'react-native-geodb';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY, API_LINK } from "../constants";
import axios from 'axios';
import WeatherIcon from "../components/WeatherIcon";

export default class FavorisView extends React.Component {
    // Etat du composant
    state = {
        fontsLoaded: false,
        researchCity: '',
        researchResult: {},
        favCities: [
            {'city': 'Abidjan'},
            {'city': 'Yamoussoukro'},
            {'city': 'Bouaké'},
            {'city': 'Grand-Bassam'},
            {'city': 'Paris'},
            {'city': 'Man'},
            {'city': 'Rennes'},
            {'city': 'Londres'},
            {'city': 'Bruxelles'},
        ],
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
        this.getFavCities();
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]); // Désactiver l'avertissement du ScrollView
    }
    // Obtenir la météo d'une ville
    async getFavCities() {
        // Récupération d'une copie de la liste des villes courantes
        let favCitiesTemp = [];
        // Itération de la liste pour récupérer les données
        for (let i = 0; i < this.state.favCities.length; i++) {
            favCitiesTemp.push(
                await axios.get(API_LINK + 'q=' + this.state.favCities[i].city + '&appid=' + API_KEY + '&units=metric&lang=FR')
                .then(response => {
                    return {
                        'city': this.state.favCities[i].city,
                        'temp': Math.round(response.data.main.temp),
                        'time': response.data.weather[0].description,
                    };
                })
                .catch(error => {
                    console.error("Cette ville n'existe pas");
                    return {};
                })
            );
        }
        // Actualisation de la liste
        this.setState({ favCities: favCitiesTemp });
    }
    searchWeather() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&units=metric&appid=dd7b4404caf35fbded8350244f2e3283`, {
                method: 'GET',
                })
                .then(response => response.json())
                .then(json => {
                    console.log(undefined);
                    this.setState({
                        researchResult: {
                            "city": json.name,
                            "country": json.sys.country,
                            "temp": json.main.temp,
                            "precip": "undefined",
                            "description": json.weather.description,
                            "humidity": json.main.humidity,
                            "wind": json.wind.speed,
                            "pressure": json.main.pressure,
                        }
                    });
                })
                .catch(error => {
                    console.error(error);
                });
    }
    // Rendu du composant
    render() {
        // Affichage de la vue
        return (
            <SafeAreaView style={styles.view}>
                <StatusBar style='light'/>
                {
                /*
                <View style={styles.header}>
                    <Text style={styles.searchText}> Favoris</Text>
                </View>
                */
                }

                {
                    <View style={styles.body}>

                        <View style={styles.worldMapBox}>
                            <Image style={styles.worldMap} source={require('../assets/img/png/world-map-update.png')} />
                            <View style={styles.insideWorldMapBox}>

                                <ScrollView contentContainerStyle={styles.contentContainer}>
                                    <FlatList
                                        //contentContainerStyle={styles.contentContainer}
                                        data={this.state.favCities}
                                        numColumns={2}
                                        keyExtractor={(item, index) => index.toString()}
                                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                                        ListHeaderComponent={
                                            <Text style={styles.historicTitle}>Villes courantes</Text>
                                        }
                                        renderItem={({ item, index }) => (
                                            <View style={styles.cityBox}>
                                                <Text style={styles.cityName}>{item.city}</Text>

                                                <WeatherIcon name={item.time} style={styles.weatherIcon}/>

                                                <View style={styles.tempTime}>
                                                    <View style={styles.tempBox}>
                                                        <Text style={styles.temperature}>{item.temp}</Text>
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
                }


            </SafeAreaView>
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
        marginTop: 30,
        flex: 1,
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
        fontSize: 16,
    },
    tempTime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
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
        fontSize: 16,
        width: '60%',
        textAlign: 'right',
        textTransform: 'capitalize',
    },
    weatherIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});