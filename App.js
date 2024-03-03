import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const addPerson = () =>{}
  return (
    <LinearGradient
      style={styles.background}
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
       <StatusBar style="auto" />
      <Text>EBEN EZER </Text>
      <TouchableOpacity onPress={addPerson}>
    <LinearGradient
      colors={["#004d40", "#009688"]}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>Adauga un utilizator
    
      </Text>
    </LinearGradient>
  </TouchableOpacity>
     
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});