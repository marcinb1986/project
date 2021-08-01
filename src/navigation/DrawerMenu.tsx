import React, { FC } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerMenuParamList } from "./DrawerMenuParamList";

export const DrawerMenu: FC = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Profil"
        onPress={() => props.navigation.navigate("Profil")}
      />
      <DrawerItem
        label="Moje Ogłoszenia"
        onPress={() => props.navigation.navigate("MojeOgłoszenia")}
      />
      <DrawerItem
        label="Moje Akcje"
        onPress={() => props.navigation.navigate("MojeAkcje")}
      />
      <DrawerItem
        label="Premium"
        onPress={() => props.navigation.navigate("Premium")}
      />
      <DrawerItem
        label="Kontakt"
        onPress={() => props.navigation.navigate("Kontakt")}
      />
    </DrawerContentScrollView>
  );
};
