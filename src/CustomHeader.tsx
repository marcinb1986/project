import React, { FC } from "react";
import { View, Image, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export interface CustomHeaderProps {}

const [selectedLanguage, setSelectedLanguage] = useState();
const [selectedCountry, setSelectedCountry] = useState();

const goBack = () => {};

export const CustomHeader: FC<CustomHeaderProps> = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row", height: 50 }}>
      <TouchableOpacity
        onPress={navigation.openDrawer()}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../src/images/menu (1).png")}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Polski" value="pl" />
          <Picker.Item label="English" value="en" />
        </Picker>
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
      <View style={{ flex: 1, width: 50, height: 30 }}>
        <Button title="Go Back" onPress={navigation.goBack()} />
      </View>
    </View>
  );
};
