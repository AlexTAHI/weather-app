import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from "./components/BottomNavigationBar";
//import MyStack from './components/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomNavigationBar />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
});
