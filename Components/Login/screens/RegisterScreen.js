import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { phoneValidator } from "../helpers/phoneValidator";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth, database } from "../../../firebase";
import { db } from "../../../firebase";
import { ref, onValue, set, push } from "firebase/database";
import * as Crypto from "expo-crypto";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [error, setError] = useState(null);

  const onSignUpPressed = () => {
    setError(null);
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const phoneError = phoneValidator(phone.value);
    if (emailError || phoneError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPhone({ ...phone, error: phoneError });
      return;
    }
    const responsabiliRef = ref(database, "Responsabili");
    push(responsabiliRef, {
      nume: name.value,
      email: email.value,
      telefon: phone.value,
    })
      .then((dt) => {
        console.log("dataID", dt);
      })
      .catch((error) => console.error(error));

    navigation.navigate("Responsabili");
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Create Account</Header>
      <TextInput
        label="Nume"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Telefon"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: "" })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        keyboardType="number-pad"
      />
      {/* <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      /> */}
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        {/* <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity> */}
      </View>
      {error && (
        <View>
          <Text>{error}</Text>
        </View>
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
