import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Profil } from "./components/wiecej/components/Profil/profil";
import { DrawerParamList } from "./DrawerParamList";
import { MojeOgloszenia } from "./components/wiecej/components/MojeOgloszenia/mojeOgloszenia";
import { MojeAkcje } from "./components/wiecej/components/MojeAkcje/mojeAkcje";
import { Premium } from "./components/wiecej/components/Premium/premium";
import { Kontakt } from "./components/wiecej/components/Kontakt/kontakt";
import { BottomTabs } from "./AppTabs";

export interface WiecejDrawerProps {}

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigation: FC<WiecejDrawerProps> = ({}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="Profil" component={Profil} />
      <Drawer.Screen name="MojeOgłoszenia" component={MojeOgloszenia} />
      <Drawer.Screen name="MojeAkcje" component={MojeAkcje} />
      <Drawer.Screen name="Premium" component={Premium} />
      <Drawer.Screen name="Kontakt" component={Kontakt} />
    </Drawer.Navigator>
  );
};
