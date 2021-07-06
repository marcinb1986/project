import React, { FC } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { BottomTabs } from "../../../../AppTabs";

export interface ProfilProps {}

export const Profil: FC<ProfilProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Profil</Text>
      <BottomTabs />
    </View>
  );
};
