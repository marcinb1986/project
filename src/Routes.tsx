import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Wykonam } from "./components/wykonam/wykonam";
import { Zlece } from "./components/zlece/zlece";
import { Wiecej } from "./components/wiecej/wiecej";
import { Moje_Ogloszenia } from "./components/moje-ogloszenia/moje-ogloszenia";
import { BottomTabs } from "./navigation/BottomTab";
export interface RoutesProps {}

export const Routes: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
