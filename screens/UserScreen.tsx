import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Image, Pressable, Alert } from 'react-native';

//components
import { Text, View } from '../components/Themed';

// styles
import main from '../styles/main';

// expo libraries
import * as Permissions from 'expo-permissions';

//firebase
import { collection, query, where, getDocs, onSnapshot} from "firebase/firestore";

//config
import { auth, db } from '../config/firebase';

//helpers
import { alertMessage } from 'helpers/alertMessage';
import { handleFirebaseError } from 'helpers/firebaseHandlerExceptions';

//assets
import plus from 'assets/plus.png';
import user from 'assets/user.png';
import exclamation from 'assets/exclamation2.png'; 
import logouticon from 'assets/logout.png';

export default function UserScreen() {
  const navigation = useNavigation();
  const [denuncias,setDenuncias]= React.useState(0)

  React.useEffect(() => {
    fetchDenuncias();
  }, [])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Perfil",
    });
  });


  const fetchDenuncias=async()=>{
    const q = query(collection(db, "denuncias"), where("codigo_usuario", "==", auth.currentUser?.uid));
    var docs = await getDocs(q);
    setDenuncias(docs.size);
    
    onSnapshot(q, querySnapshot => {
      setDenuncias(querySnapshot.size);
    }, err => {
      console.log(`Encountered error: ${err}`);
    });

  }
  async function logout(){
    try {
      await auth.signOut();
      navigation.navigate('Root', { screen: 'LoginScreen' })
  
    } catch (error) {
      console.log(error);
    }
  }

  async function openReport(){
    const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
    if (status !== "granted") {
      alertMessage(
        "Permissão insuficiente",
        "Desculpa, nós precisamos da permissão de Localização para isso funcionar");
      return;
    }
    navigation.navigate('Root', { screen: 'ReportScreen' })
  
  }

  let image;
  if(auth.currentUser && auth.currentUser?.photoURL){
    image = <Image source={{uri : auth.currentUser?.photoURL}} style={{marginBottom: 2, width: 100, borderRadius: 150 / 2, height:100}}/>
  }else{
    image = <Image source={user} style={{marginBottom: 2, width: 100, height:100}}/>
  }

  return (
    
    <View style={main.centeredprofile} >
      <View style={main.profileBackground}>
      <Text style={{color:'#fff', fontFamily:'poppins', fontWeight: "bold", fontSize: 30}}>Perfil</Text>
      </View>


      <View style={main.cardProfile}>
        <View style={{top: 0, backgroundColor:'transparent'}}> 
          {
            image
          }
        </View>
        <Text style={{color:'#000', fontFamily:'poppins', fontSize: 20, fontWeight: "bold"}}>{auth.currentUser?.isAnonymous ? "Anônimo" : auth.currentUser?.displayName}</Text>
      </View>

      <View style={main.cardDenuncias}>

        <View style={{width: '20%', backgroundColor:'transparent'}}>
          <Image source={exclamation} style={{width: 40, height: 40}}></Image>
        </View>

        <View style={{width: '70%', backgroundColor:'transparent', top: '50%', position: 'absolute', right:40}}>
          <Text>
            <Text style={{color:'#000', fontFamily:'poppins'}}>Você possui </Text>
            <Text style={{color:'#000', fontFamily:'poppins', fontWeight: "bold"}}>{denuncias}</Text>
            
            <Text style={{color:'#000', fontFamily:'poppins'}}> denúncias</Text>
          </Text>
        </View>
        
      </View>

      <View style={main.cardProfileIcon}>
        <View style={{width: '20%', backgroundColor:'transparent'}}><Pressable onPress={openReport}><Image source={plus} style={{width: 40, height: 40}}></Image></Pressable></View>
        <View style={{width: '70%', backgroundColor:'transparent', marginTop:5}}><Pressable onPress={openReport}>
          <Text style={{color:'#000', fontFamily:'poppins', fontWeight: "bold", textAlign: 'left', fontSize: 20}}>Nova denúncia</Text>
        </Pressable></View>
      </View>

      <View style={main.cardProfileIcon}>
        <View style={{width: '20%', backgroundColor:'transparent'}}><Pressable onPress={logout}><Image source={logouticon} style={{width: 40, height: 40}}></Image></Pressable></View>
        <View style={{width: '70%', backgroundColor:'transparent', marginTop:5}}><Pressable onPress={logout}>
          <Text style={{color:'#000', fontFamily:'poppins', fontWeight: "bold", textAlign: 'left', fontSize: 20}}>Sair</Text>
        </Pressable></View>
      </View>

    </View>
  )
};

