import React, { FC } from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "./navigation/BottomTab";
import { createStackNavigator } from "@react-navigation/stack";
import { CustomHeader } from "./CustomHeader";
import { Image, TouchableOpacity } from "react-native";

export interface RoutesProps {
  navigation: any;
}

const Stack = createStackNavigator();
export const Routes: FC<RoutesProps> = ({ navigation }) => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../src/images/menu (1).png")}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="App" component={BottomTabs} />
        
      </Stack.Navigator> */}
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => (
            <CustomHeader navigation={navigation} {...props} />
          ),
          headerStyle: { height: 50 },
        }}
      >
        <Stack.Screen
          name="App"
          component={BottomTabs}
          // options={{
          //   headerTitle: (props) => (
          //     <CustomHeader navigation={navigation} {...props} />
          //   ),
          //   headerStyle: { height: 50 },
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
