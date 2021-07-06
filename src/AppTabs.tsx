import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "./AppParamList";
import { Wykonam } from "./components/wykonam/wykonam";
import { Zlece } from "./components/zlece/zlece";
import { Wiadomosci } from "./components/wiadomosci/wiadomosci";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { DrawerNavigation } from "./WiecejDrawer";
import { DrawerActions } from "@react-navigation/native";

export interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const BottomTabs: FC<AppTabsProps> = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Wykonam") {
            iconName = "hands-helping";
            return (
              <FontAwesome5 name="hands-helping" size={24} color="black" />
            );
          } else if (route.name === "Zlecę") {
            iconName = "donate";
            return <FontAwesome5 name="donate" size={24} color="black" />;
          } else if (route.name === "Wiadomości") {
            iconName = "feather";
            return <Feather name="message-square" size={24} color="black" />;
          } else if (route.name === "Więcej") {
            iconName = "ios-menu";
            return <Ionicons name={"ios-menu"} size={24} color="black" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#08bf11",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Wykonam" component={Wykonam} />
      <Tabs.Screen name="Zlecę" component={Zlece} />
      <Tabs.Screen name="Wiadomości" component={Wiadomosci} />

      <Tabs.Screen
        name="Więcej"
        component={DrawerNavigation}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log("pressed");
            navigation.dispatch(DrawerActions.openDrawer());
          },
        })}
      />
    </Tabs.Navigator>
  );
};
