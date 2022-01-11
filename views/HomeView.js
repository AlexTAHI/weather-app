import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import loadFonts from "../assets/fonts/font";

export default class HomeView extends React.Component {
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
                    <View style={styles.headerItems}>
                        <Text style={styles.headerText}>{now.toDateString()}</Text>
                        <View style={styles.cityInfos}>
                            <Image style={styles.cityIcon} source={require('../assets/img/flat-icons/pin.png')} />
                            <Text style={styles.cityName}>
                                Yamoussoukro,
                                <Text style={styles.countryName}> Côte d'Ivoire</Text>
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
                            <Image style={styles.weatherIcon} source={require('../assets/img/weather/cloudy.png')}/>
                            <Text style={styles.tempTime}>Cloudy</Text>
                            <View style={styles.tempBox}>
                                <Text style={styles.temperature}>13</Text>
                                <Text style={styles.celsius}>°</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.weatherDatas} blurRadius={9}>
                        <View style={styles.weatherDatasChild} blurRadius={9}>
                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Précipitation</Text>
                                <Text style={styles.weatherDatasChildValue}>30%</Text>
                            </View>

                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Humidité</Text>
                                <Text style={styles.weatherDatasChildValue}>27%</Text>
                            </View>
                        </View>

                        <View style={styles.weatherDatasSeparator}>

                        </View>

                        <View style={styles.weatherDatasChild}>
                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Vent</Text>
                                <Text style={styles.weatherDatasChildValue}>8 Km/h</Text>
                            </View>

                            <View style={styles.weatherDatasChildPart}>
                                <Text style={styles.weatherDatasChildTitle}>Pression</Text>
                                <Text style={styles.weatherDatasChildValue}>840 hPa</Text>
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