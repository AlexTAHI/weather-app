import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CityView from '../views/CityView';
import SearchView from '../views/SearchView';

const Stack = createNativeStackNavigator();

export default CityStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      >
        <Stack.Screen name="ListeVille" component={CityView} />
        <Stack.Screen name="FicheVille" component={SearchView} />
      </Stack.Navigator>
  );
};
