import React, { FC } from "react";
import { BottomTabsParamList } from "./BottomTabsParamList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dodaj } from "../components/dodaj/dodaj";
import { Wiadomosci } from "../components/wiadomosci/wiadomosci";
import { Wykonam } from "../components/wykonam/wykonam";
import { Zlece } from "../components/zlece/zlece";

import { DrawerActions } from "@react-navigation/native";
import { WiecejDrawerNavigation } from "./DrawerNavigation";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { CustomHeader } from "../CustomHeader";

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs: FC = ({}) => {
  const activeColor = "red";
  const inactiveColor = "blue";
  return (
    <Tabs.Navigator
      // tabBar={(props) => <CustomHeader {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Wykonam") {
            iconName = "tool";
            return focused ? (
              <AntDesign name="tool" size={24} color={activeColor} />
            ) : (
              <AntDesign name="tool" size={24} color={inactiveColor} />
            );
          } else if (route.name === "Zlecę") {
            iconName = "money";
            return focused ? (
              <FontAwesome name="money" size={24} color="tomato" />
            ) : (
              <FontAwesome name="money" size={24} color="black" />
            );
          } else if (route.name === "Wiadomości") {
            return focused ? (
              <MaterialIcons name="message" size={24} color="tomato" />
            ) : (
              <MaterialIcons name="message" size={24} color="black" />
            );
          } else if (route.name === "Dodaj") {
            return focused ? (
              <Feather name="plus" size={24} color="tomato" />
            ) : (
              <Feather name="plus" size={24} color="black" />
            );
          } else if (route.name === "Więcej") {
            return focused ? (
              <Feather name="more-horizontal" size={24} color="tomato" />
            ) : (
              <Feather name="more-horizontal" size={24} color="black" />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Wykonam" component={Wykonam} />
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
