import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthParamList } from "./AuthParamList";
import { DrawerNavigation } from "./WiecejDrawer";

export interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();
export const Routes: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};
