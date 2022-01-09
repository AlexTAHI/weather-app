import React from 'react';
import axios from 'axios';
import { API_LINK, API_KEY } from '../constants';

export default class Meteo extends React.Component {
    //! Constructeur du composant
    constructor(props) {
        super(props);
        this.getMeteo = this.getMeteo.bind(this);
        this.state = {
            ville: "Yamoussoukro",
            temp: 0,
            trouve: true,
        };
    }
    //! Fonction pour obtenir la météo d'une ville
    getMeteo() {
        axios.get(API_LINK + 'q=' + this.state.ville + '&appid=' + API_KEY + '&units=metric')
            .then(response => {
                console.log(response.data.main.temp);
                this.setState({ trouve: true, temp: response.data.main.temp });
            })
            .catch(error => {
                console.error("Cette ville n'existe pas");
                this.setState({ trouve: false});
            });
    }
    handleChange = event => {
        this.setState({ville: event.target.value});
    };
    //! Rendu du composant
    render() {
        if (this.state.trouve) {
            return (
                <>
                    <h3>Météo du jour</h3>

                    <div>
                        <label>Ville:</label>
                        <input type='text' onChange={this.handleChange} />
                        <button onClick={this.getMeteo.bind(this)}>Rechercher</button>
                    </div>

                    <p>Ville : {this.state.ville}</p>
                    <p>Temp : {this.state.temp} °C</p>
                </>
            );
        } else {
            return (
                <>
                    <h3>Météo du jour</h3>

                    <div>
                        <label for='city-input'>Ville:</label>
                        <input name='city-input' type='text' onChange={this.handleChange} />
                        <button onClick={this.getMeteo.bind(this)}>Rechercher</button>
                    </div>

                    <p>Ville : Erreur</p>
                </>
            );
        }
    }
}