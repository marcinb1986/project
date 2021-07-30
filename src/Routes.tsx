import React, { FC } from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "./navigation/BottomTab";
import { createStackNavigator } from "@react-navigation/stack";
import { CustomHeader } from "./navigation/CustomHeader";
import { Image, TouchableOpacity } from "react-native";
import { DrawerNavigation } from "./navigation/DrawerNavigation";

export interface RoutesProps {
  navigation: any;
}

const Stack = createStackNavigator();
export const Routes: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={DrawerNavigation}
          options={({ navigation }) => {
            return {
              headerTitle: (props) => (
                <CustomHeader navigation={navigation} {...props} />
              ),
              headerStyle: { height: 50 },
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
