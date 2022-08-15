import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import LoginScreen from '../screens/LoginScreen';
import UserScreen from '../screens/UserScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ReportScreen from '../screens/ReportScreen';
import ReportCidadaoScreen from '../screens/reports/CidadaoScreen';

import { DrawerParamList, LoginScreenParamList, RegisterScreenParamList, UserParamList, ReportScreenParamList, ReportCidadaoScreenParamList} from '../types';
import { auth } from '../config/firebase';

const Drawer = createDrawerNavigator<DrawerParamList>();
export default function DrawerNavigator() {

  

  if(auth.currentUser){
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="UserScreen" 
          options={{ title: auth && auth.currentUser ? `Olá ` + (auth.currentUser.isAnonymous ? "Anônimo" : auth.currentUser.displayName) : "Fazer Login" }}
          component={UserNavigator}
        />

        <Drawer.Screen
          name="ReportScreen" 
          options={{ title: "Nova denuncia"}}
          component={ReportScreenNavigator}
        />

        <Drawer.Screen
          name="ReportCidadaoScreen" 
          options={{ title: "Nova denuncia"}}
          component={ReportCidadaoScreenNavigator}
        />

      </Drawer.Navigator>
    );
  }else{
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="LoginScreen"
          options={{ title: 'Fazer Login'}}
          component={LoginScreenNavigator}
        />

        <Drawer.Screen
          name="RegisterScreen"
          options={{ title: 'Fazer Registro'}}
          component={RegisterScreenNavigator}
        />
      </Drawer.Navigator>
    );
  }
  
}

const ReportCidadaoScreenStack = createStackNavigator<ReportCidadaoScreenParamList>();

function ReportCidadaoScreenNavigator() {
  return (
    <ReportCidadaoScreenStack.Navigator>
      <ReportCidadaoScreenStack.Screen
        name="ReportCidadaoScreen"
        component={ReportCidadaoScreen}
      />
    </ReportCidadaoScreenStack.Navigator>
  )
}

const RegisterScreenStack = createStackNavigator<RegisterScreenParamList>();

function RegisterScreenNavigator() {
  return (
    <RegisterScreenStack.Navigator>
      <RegisterScreenStack.Screen
        name="Fazer Registro"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </RegisterScreenStack.Navigator>
  )
}

const ReportScreenStack = createStackNavigator<ReportScreenParamList>();

function ReportScreenNavigator() {
  return (
    <ReportScreenStack.Navigator>
      <ReportScreenStack.Screen
        name="Fazer Denuncia"
        component={ReportScreen}
      />
    </ReportScreenStack.Navigator>
  )
}

const LoginScreenStack = createStackNavigator<LoginScreenParamList>();

function LoginScreenNavigator() {
  return (
    <LoginScreenStack.Navigator>
      <LoginScreenStack.Screen
        name="Fazer Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </LoginScreenStack.Navigator>
  )
}

const ClientsStack = createStackNavigator<UserParamList>();

function UserNavigator() {
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen
        name='Perfil'
        component={UserScreen}
        options={{headerShown: false}}
      />
    </ClientsStack.Navigator>
  )
}
