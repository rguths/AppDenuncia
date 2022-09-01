import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


import { Text, View } from '../components/Themed';
import main from '../styles/main';

import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationEvents } from 'react-navigation';

export default function UserScreen() {
  const navigation = useNavigation();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [items, setItems] = React.useState([
    {label: 'Coleta realizada', value: 1},
    {label: 'Proliferação da Dengue', value: 2},
    {label: 'Buraco na via', value: 3},
  ]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Nova Ocorrência", headerLeft: () => (
      <Pressable style={{marginLeft: 20}} onPress={()=>{navigation.navigate('Root', { screen: 'UserScreen' })}}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </Pressable>
      )
    });
  });

  return (
    
    <View style={main.centered} >
        <View style={{width: '80%'}}>
          <Text style={{color:'#000', fontFamily: 'poppins'}}>Selecione uma situação</Text>
          <DropDownPicker style={{
            width: '100%', alignContent: 'center', borderRadius: 0, borderColor: 'transparent'
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={() => {
              if(value == 1){ //Cidadão adulterado
                navigation.navigate("Root", {screen: "ReportCidadaoScreen"})
              }else if(value == 2) { //Proliferação da Dengue
                
              }else if(value == 3){ // Buraco na via
              }
            }}
          />

        </View>
        
    </View>
  )
};

