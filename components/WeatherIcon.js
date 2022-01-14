import React from "react";
import { Image } from 'react-native';

export default class WeatherIcon extends React.Component {
    // Constructeur
    constructor(props) {
        super(props);
    }
    render() {
        var icon = <Image style={this.props.style} source={require('../assets/img/weather/sun.png')} />;
        // Charger une icône en fonction du nom
        switch (this.props.name) {
            case 'Nuageux': icon = <Image style={this.props.style} source={require('../assets/img/weather/cloud.png')} />;
            case 'Thunder': icon = <Image style={this.props.style} source={require('../assets/img/weather/thunder.png')} />;
            case 'Rain': icon = <Image style={this.props.style} source={require('../assets/img/weather/rain.png')} />;
            case 'Clear': icon = <Image style={this.props.style} source={require('../assets/img/weather/sun.png')} />;
            case 'Snow': icon = <Image style={this.props.style} source={require('../assets/img/weather/snow.png')} />;
            case 'HalfCloudySun': icon = <Image style={this.props.style} source={require('../assets/img/weather/half-cloudy-sun.png')} />;
            case 'HalfCloudyMoon': icon = <Image style={this.props.style} source={require('../assets/img/weather/half-cloudy-moon.png')} />;
            case 'WindSun': icon = <Image style={this.props.style} source={require('../assets/img/weather/wind-sun.png')} />;
            default: break;
        }
        // Affichage
        return icon;
    }
}