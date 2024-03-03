<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { db } from './firebase';
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
>>>>>>> 9fada06cda21e98af7a70ac87ec613ebab07dd91

export default function App() {
const addPerson = ()=> {

}

  return (
<<<<<<< HEAD

    <View style={styles.container}>
      <TouchableOpacity style= {styles.button} onPress={addPerson}>
        <Text>Adaugă</Text>
      </TouchableOpacity>
      <Text>Hola Mundo</Text>
=======
    <LinearGradient
      style={styles.background}
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text>EBEN EZER </Text>
>>>>>>> 9fada06cda21e98af7a70ac87ec613ebab07dd91
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    alignItems: "center",
    backgroundColor:"grey",
    borderRadius: 25,
    height: 40,
    width: 150
  }
});
