import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "./AppParamList";
import { Wykonam } from "./components/wykonam/wykonam";
import { Zlece } from "./components/zlece/zlece";
import { Moje_Ogloszenia } from "./components/moje-ogloszenia/moje-ogloszenia";
import { Wiecej } from "./components/wiecej/wiecej";

export interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator tabBarOptions={{ tabStyle: { justifyContent: "center" } }}>
      <Tabs.Screen name="Wykonam" component={Wykonam} />
      <Tabs.Screen name="Zlecę" component={Zlece} />
      <Tabs.Screen name="Moje" component={Moje_Ogloszenia} />
      <Tabs.Screen name="Więcej" component={Wiecej} />
    </Tabs.Navigator>
  );
};
