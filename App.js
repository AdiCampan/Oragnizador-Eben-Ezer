import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { db } from './firebase';

export default function App() {
const addPerson = ()=> {

}

  return (

    <View style={styles.container}>
      <TouchableOpacity style= {styles.button} onPress={addPerson}>
        <Text>Adaugă</Text>
      </TouchableOpacity>
      <Text>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: "center",
    backgroundColor:"grey",
    borderRadius: 25,
    height: 40,
    width: 150
  }
});
