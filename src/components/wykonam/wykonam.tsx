import React, { FC } from "react";
import { Text } from "react-native";
import { Wrapper } from "../wrapper/wrapper";

export interface WykonamProps {}

export const Wykonam: FC<WykonamProps> = ({}) => {
  return (
    <Wrapper>
      <Text>Wykonam</Text>
    </Wrapper>
  );
};
