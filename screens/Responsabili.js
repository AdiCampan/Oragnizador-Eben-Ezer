import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { push, ref } from "firebase/database";
import { database } from "../firebase";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Responsabili = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Responsabili</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <LinearGradient
          colors={["#560CCE", "#dda0dd"]}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Adauga un Responsabil</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Responsabili;

const styles = StyleSheet.create({
  appButtonContainer: {
    margin: 5,
    elevation: 8,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
