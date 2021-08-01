import React, { FC } from "react";

import { BottomTabs } from "./BottomTab";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "./DrawerParamList";
import { DrawerMenu } from "./DrawerMenu";
import { Kontakt } from "../components/wiecej/components/kontakt/kontakt";
import { Moje_Ogloszenia } from "../components/moje-ogloszenia/moje-ogloszenia";
import { MojeAkcje } from "../components/wiecej/components/mojeAkcje/mojeAkcje";
import { Premium } from "../components/wiecej/components/premium/premium";
import { Profil } from "../components/wiecej/components/profil/profil";

export interface WiecejDrawerProps {
  navigation: any;
  route: any;
}
const Drawer = createDrawerNavigator<DrawerParamList>();
export const DrawerNavigation: FC<WiecejDrawerProps> = ({
  navigation,
  route,
}) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTabs} />
      <Drawer.Screen name="Profil" component={Profil} />
      <Drawer.Screen name="MojeOgłoszenia" component={Moje_Ogloszenia} />
      <Drawer.Screen name="MojeAkcje" component={MojeAkcje} />
      <Drawer.Screen name="Premium" component={Premium} />
      <Drawer.Screen name="Kontakt" component={Kontakt} />
    </Drawer.Navigator>
  );
};
