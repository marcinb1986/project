import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsParamList } from "./BottomTabsParamList";

import React, { FC } from "react";
import { Wykonam } from "../components/wykonam/wykonam";
import { Zlece } from "../components/zlece/zlece";
import { Dodaj } from "../components/dodaj/dodaj";
import { Wiadomosci } from "../components/wiadomosci/wiadomosci";
import { WiecejDrawerNavigation } from "./DrawerNavigation";
import { DrawerActions } from "@react-navigation/native";

export interface BottomTabsProps {}

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs: FC<BottomTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Wykonam" component={Wykonam}></Tabs.Screen>
      <Tabs.Screen name="Zlecę" component={Zlece}></Tabs.Screen>
      <Tabs.Screen name="Wiadomości" component={Wiadomosci}></Tabs.Screen>
      <Tabs.Screen name="Dodaj" component={Dodaj}></Tabs.Screen>
      <Tabs.Screen
        name="Więcej"
        component={WiecejDrawerNavigation}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            navigation.dispatch(DrawerActions.openDrawer());
          },
        })}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};
