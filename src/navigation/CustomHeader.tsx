import React, { FC } from "react";
import { View, Image, Button, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";

export interface CustomHeaderProps {
  navigation: any;
}

export const CustomHeader: FC<CustomHeaderProps> = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Image
          style={{ width: 20, height: 20, tintColor: "red" }}
          source={require("../images/menu (1).png")}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
      <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text>Język / Language : </Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Polski" value="pl" />
            <Picker.Item label="English" value="en" />
          </Picker>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text> Kraj / Country : </Text>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCountry(itemValue)
            }
          >
            <Picker.Item label="Polska" value="plCountry" />
            <Picker.Item label="UK" value="ukCountry" />
          </Picker>
        </View>
      </View>
    </View>
  );
};
