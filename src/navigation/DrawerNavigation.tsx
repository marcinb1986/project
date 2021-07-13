import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "./DrawerParamList";
import { Profil } from "../components/wiecej/components/profil/profil";
import { MojeAkcje } from "../components/wiecej/components/mojeAkcje/mojeAkcje";
import { MojeOgloszenia } from "../components/wiecej/components/mojeOgloszenia/mojeOgloszenia";
import { Premium } from "../components/wiecej/components/premium/premium";
import { Kontakt } from "../components/wiecej/components/kontakt/kontakt";

export interface WiecejDrawerProps {}

const Drawer = createDrawerNavigator<DrawerParamList>();

export const WiecejDrawerNavigation: FC<WiecejDrawerProps> = ({}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profil" component={Profil} />
      <Drawer.Screen name="MojeOgłoszenia" component={MojeOgloszenia} />
      <Drawer.Screen name="MojeAkcje" component={MojeAkcje} />
      <Drawer.Screen name="Premium" component={Premium} />
      <Drawer.Screen name="Kontakt" component={Kontakt} />
    </Drawer.Navigator>
  );
};
