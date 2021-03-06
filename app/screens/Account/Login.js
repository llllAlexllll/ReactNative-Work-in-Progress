import React, {useRef} from "react";
import{Text, View, StyleSheet, ScrollView, Image} from "react-native";
import{ Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login() {
const toastRef = useRef();

    return(
       <ScrollView>
           <Image
            source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
            resizeMode="contain"
            style={styles.logo}
           />
           <View style={styles.viewStyle}>
              <LoginForm toastRef={toastRef}/>
               <CreateAccount/> 
           </View>
           <Divider style={styles.divider}/>
           
           <Toast ref={toastRef} position="center" opacity={0.9} />
       </ScrollView>
    );
}

function CreateAccount(){
const navigation = useNavigation();
    return(
         <Text style={styles.textRegister}>
             ¿No tienes una cuenta?{" "}
                    <Text 
                    style={styles.btnRegister}
                    onPress={() => navigation.navigate("register")} 
                    >
                        Registrate 
                        </Text>
        </Text>
    )
}



const styles = StyleSheet.create({

logo:{
    width:"100%",
    height:150,
    marginTop: 20,
},
viewStyle:{
    marginRight:40,
    marginLeft:40,
},
textRegister:{
    marginLeft:10,
    marginRight:10,
    marginTop:15,
},
btnRegister:{
    color:"#00a680",
    fontWeight:"bold",
},
divider:{
    backgroundColor:"#00a680",
    margin:40,
    padding:0.5,
    
},





})