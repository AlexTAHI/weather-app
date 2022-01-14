import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import loadFonts from "../assets/fonts/font";
import axios from 'axios';
import { API_LINK, API_KEY } from '../constants';
import WeatherIcon from '../components/WeatherIcon';

export default class HomeView extends React.Component {
    // Etat du composant
    state = {
        city: 'Yamoussoukro',
        country: 'CI',
        temp: 0,
        time: '',
        humidity: 0,
        wind: 0,
        pressure: 0,
        visibility: 0,
        weatherIcon: null,
    };
    // Appel avant le montage du composant
    componentDidMount() {
        loadFonts();
        this.getWeather();
    }
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
    // Rendu du composant
    render() {
        const now = new Date(); // Date d'aujourd'hui
        // Affichage de la vue
        return (
            <View style={styles.view}>
                <StatusBar style='light'/>
                <View style={styles.header}>
                    <View style={styles.headerItems}>
                        <Text style={styles.headerText}>{now.toDateString()}</Text>
                        <View style={styles.cityInfos}>
                            <Image style={styles.cityIcon} source={require('../assets/img/flat-icons/pin.png')} />
                            <Text style={styles.cityName}>
                                {this.state.city},
                                <Text style={styles.countryName}> {this.state.country}</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.headerItems}>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.worldMapBox}>
                        <Image style={styles.worldMap} source={require('../assets/img/png/world-map-update.png')}/>
                        <View style={styles.insideWorldMap}>
                            {
                                this.state.weatherIcon
                                //<Image style={styles.weatherIcon} source={require('../assets/img/weather/sun.png')} />
                            }

                            <Text style={styles.tempTime}>{this.state.time}</Text>
                            <View style={styles.tempBox}>
                                <Text style={styles.temperature}>{this.state.temp}</Text>
                                <Text style={styles.celsius}>°</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.weatherDatas} blurRadius={9}>
                        <View style={styles.weatherDatasChild} blurRadius={9}>
                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Visibilité</Text>
                                <Text style={styles.weatherDatasChildValue}>{this.state.visibility} Km</Text>
                            </View>

                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Humidité</Text>
                                <Text style={styles.weatherDatasChildValue}>{this.state.humidity}%</Text>
                            </View>
                        </View>

                        <View style={styles.weatherDatasSeparator}>

                        </View>

                        <View style={styles.weatherDatasChild}>
                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Vent</Text>
                                <Text style={styles.weatherDatasChildValue}>{this.state.wind} m/s</Text>
                            </View>

                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Pression</Text>
                                <Text style={styles.weatherDatasChildValue}>{this.state.pressure} hPa</Text>
                            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        //backgroundColor: '#3d3d3d',
        borderRadius: 20,
        marginTop: 30,
    },
    headerItems: {
        width: '75%',
        //backgroundColor: 'rgba(255,0,0,0.5)',
        borderRadius: 20,
    },
    headerText: {
        color: 'white',
        fontFamily: 'Poppins',
    },
    cityInfos: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cityIcon: {
        width: 20,
        height: 25,
        marginRight: 5,
    },
    cityName: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
    },
    countryName: {
        color: '#808082',
        fontFamily: 'Poppins-Light',
    },
    body: {
        width: '100%',
        height: '100%',
        //backgroundColor: 'green',
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
    weatherIcon: {
        width: 200,
        height: 200,
        marginTop: 20,
        resizeMode: 'contain',
    },
    tempBox: {
        flexDirection: 'row',
    },
    tempTime: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        marginTop: 15,
        textTransform: 'capitalize',
    },
    temperature: {
        fontFamily: 'SplineSans-SemiBold',
        color: 'white',
        fontSize: 100,
        backgroundColor: 'transparent',
    },
    celsius: {
        fontFamily: 'SplineSans',
        color: '#f9d65d',
        fontSize: 100,
    },
    weatherDatas: {
        backgroundColor: '#333',
        width: '100%',
        height: 200,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    weatherDatasChild: {
        //backgroundColor: '#80808299',
        width: '47%',
        height: '100%',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    weatherDatasChildPart: {
        alignItems: 'center',
    },
    weatherDatasChildTitle: {
        color: '#aaa',
        fontFamily: 'Poppins',
        fontSize: 18,
    },
    weatherDatasChildValue: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 18,
    },
    weatherDatasSeparator: {
        backgroundColor: 'white',
        width: 2.5,
        height: '90%',
        borderRadius: 25,
    }
});