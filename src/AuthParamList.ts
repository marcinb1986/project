import { StackNavigationProp } from "@react-navigation/stack";

export type AuthParamList = {
  Wykonam: undefined;
  Zlecę: undefined;
  Moje: undefined;
  Więcej: undefined;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  //  Użycie do buttona i routing z filmu Ben Awad
};
