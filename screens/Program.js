import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Program = () => {
  const addGroup = () => {};
  const addInstruments = () => {};
  return (
    <SafeAreaView>
      <View>
        <Text>Grup Cantari: </Text>
        <Button onPress={addGroup} title="Alege " />
      </View>
      <View>
        <Text>Instrumentisti :</Text>
        <Button onPress={addInstruments} title="Alege" />
      </View>
      <View>
        <Text>Proyector: </Text>
        <Button onPress={addGroup} title="Alege " />
      </View>
      <View>
        <Text>Mixer Audio: </Text>
        <Button onPress={addGroup} title="Alege " />
      </View>
    </SafeAreaView>
  );
};

export default Program;

const styles = StyleSheet.create({});
