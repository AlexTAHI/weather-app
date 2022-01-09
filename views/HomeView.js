import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import loadFonts from "../assets/fonts/font";

export default class HomeView extends React.Component {
    // Etat du composant
    state = {
        fontsLoaded: false,
    };
    // Appel avant le montage du composant
    componentDidMount() {
        //loadFonts();
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
                        <Image style={styles.worldMap} /*blurRadius={5}*/ source={require('../assets/img/png/world-map.png')}/>
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
        height: 200,
        resizeMode: 'cover',
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
        color: 'white',
        fontSize: 100,
    },
    celsius: {
        color: '#f9d65d',
        fontSize: 80,
    },
    weatherDatas: {
        backgroundColor: '#80808299',
        width: '100%',
        height: 200,
        borderRadius: 25,
    },
});