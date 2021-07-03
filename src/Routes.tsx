import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthParamList } from "./AuthParamList";
import { AppTabs } from "./AppTabs";

export interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();
export const Routes: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{ header: () => null }}
        initialRouteName="Wykonam"
      >
        <Stack.Screen name="Wykonam" component={Wykonam} />
        <Stack.Screen name="Zlecę" component={Zlece} />
        <Stack.Screen name="Moje" component={Moje_Ogloszenia} />
        <Stack.Screen name="Więcej" component={Wiecej} />
      </Stack.Navigator> */}
      <AppTabs />
    </NavigationContainer>
  );
};
