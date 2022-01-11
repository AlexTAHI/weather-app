import { StyleSheet, Text, View } from 'react-native';
import HomeView from './views/HomeView';
import BottomNavigationBar from "./components/BottomNavigationBar";

export default function App() {
  return (
    <View style={styles.container}>
      <BottomNavigationBar />
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
