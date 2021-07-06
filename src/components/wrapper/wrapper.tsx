import React, { FC } from "react";
import { View } from "react-native";

interface WrapperProps {
  children: any;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      {children}
    </View>
  );
};
