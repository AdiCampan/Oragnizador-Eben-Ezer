import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cantari from "./screens/Cantari";
import Responsabili from "./screens/Responsabili";
import Dashboard from "./screens/Dashboard";
import Programe from "./screens/Programe";
import AddProgram from "./screens/AddProgram";
import Program from "./screens/Program";
import MyForm from "./Components/MyForm";
import RegisterScreen from "./Components/Login/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen name="Programe" component={Programe} />
      <Stack.Screen name="AddProgram" component={AddProgram} />
      <Stack.Screen name="Program" component={Program} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Cantari" component={Cantari} />

      <Stack.Screen name="Responsabili" component={Responsabili} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
