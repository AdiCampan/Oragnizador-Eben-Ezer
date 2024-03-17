import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { onValue, push, ref } from "firebase/database";
import { database } from "../firebase";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Responsabili = () => {
  const navigation = useNavigation();

  const [responsabili, setResponsabili] = useState();

  const getResponsabili = () => {
    const responsabiliRef = ref(database, "Responsabili/");
    onValue(responsabiliRef, (snapshot) => {
      const tmpArray = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        tmpArray.push({ id: childKey, ...childData });
      });
      const listOfResponsabili = tmpArray;
      setResponsabili(listOfResponsabili);
    });
  };

  useEffect(() => {
    getResponsabili();
  }, []);

  const myItemSeparator = () => {
    return (
      <View
        style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }}
      />
    );
  };
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={responsabili}
        renderItem={({ item }) => (
          <Text
            onPress={() => navigation.navigate("Responsabil")}
            style={styles.item}
          >
            {JSON.stringify(item.nume)} Telefon:
            {JSON.stringify(item.telefon)}
          </Text>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        ListHeaderComponent={() => (
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 20,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Lista de Responsabili
          </Text>
        )}
        ListFooterComponent={() => (
          <Text
            style={{
              fontSize: 10,
              textAlign: "center",
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            EbenEzer-MEDIA-2024
          </Text>
        )}
      />

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
  item: {
    backgroundColor: "#dcdcdc",
    padding: 20,
    marginTop: 5,
    fontSize: 20,
  },
});
