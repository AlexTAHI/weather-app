import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeView extends React.Component {
    render() {
        const now = new Date(); // Date d'aujourd'hui
        // Affichage de la vue
        return (
            <View style={styles.view}>
                <StatusBar style={styles.statusbar} />
                <View style={styles.header}>
                    <View style={styles.headerItems}>
                        <Text style={styles.headerText}>{now.toDateString()}</Text> 
                    </View>
                    <View style={styles.headerItems}>
            
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
        backgroundColor: '#333',
        alignItems: 'center',
        padding: 15,
    },
    statusbar: {
        color: 'white',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        backgroundColor: '#3d3d3d',
        borderRadius: 20,
        marginTop: 30,
    },
    headerItems: {
        width: '48%',
        //backgroundColor: 'rgba(255,0,0,0.5)',
        borderRadius: 20,
    },
    headerText: {
        color: 'white',
        fontFamily: 'Poppins',
    },
});