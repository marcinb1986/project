import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Wykonam } from "./components/wykonam/wykonam";
import { Zlece } from "./components/zlece/zlece";
import { Wiecej } from "./components/wiecej/wiecej";
import { Moje_Ogloszenia } from "./components/moje-ogloszenia/moje-ogloszenia";

export interface RoutesProps {}

const Stack = createStackNavigator();
export const Routes: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Wykonam" component={Wykonam} />
        <Stack.Screen name="Zlecę" component={Zlece} />
        <Stack.Screen name="Moje Ogłoszenia" component={Moje_Ogloszenia} />
        <Stack.Screen name="Więcej" component={Wiecej} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
