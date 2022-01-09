import * as Font from 'expo-font';

// Chargement des polices
export default async function loadFonts() {
    /*
    * Fonction de chargement des polices
    * Elle ne prends aucun paramètre
    * Elle renvoi [true] si les polices on bien été chargées
    * Elle renvoi [false] si les polices n'ont pas réussi à cahrger
    */
    return await Font.loadAsync(
        {
            // Montserrat
            'Montserrat': require('./Montserrat/Montserrat-Regular.ttf'),
            'Montserrat-Bold': require('./Montserrat/Montserrat-Bold.ttf'),
            'Montserrat-SemiBold': require('./Montserrat/Montserrat-SemiBold.ttf'),
            // Poppins
            'Poppins-Light': require('./Poppins/Poppins-Light.ttf'),
            'Poppins': require('./Poppins/Poppins-Regular.ttf'),
            'Poppins-SemiBold': require('./Poppins/Poppins-SemiBold.ttf'),
            'Poppins-Bold': require('./Poppins/Poppins-Bold.ttf'),
            'Poppins-ExtraBold': require('./Poppins/Poppins-ExtraBold.ttf'),
            'Poppins-Black': require('./Poppins/Poppins-Black.ttf'),
        }
    // Résultat après chargement des polices
    ).then(() => { // En cas de succès...
        console.log('Chargement des polices terminé !');
        return true;
    }).catch(() => { // En cas d'échec...
        console.error('Echec de chargement des polices');
        return false;
    });
}
// Lancer le chargement des polices
loadFonts();
