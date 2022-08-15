import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type DrawerParamList = {
  LoginScreen: undefined;
  UserParamList: undefined;  
};

export type ReportCidadaoScreenParamList = {
  CidadaoScreen: undefined;
};

export type RegisterScreenParamList = {
  RegisterScreen: undefined;
};

export type ReportScreenParamList = {
  ReportScreen: undefined;
};

export type LoginScreenParamList = {
  LoginScreen: undefined;
};

export type UserParamList = {
  UserScreen: undefined;
};

export type onPressFunc = (event: GestureResponderEvent) => void;
