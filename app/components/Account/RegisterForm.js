import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty, initial } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native"
import Loading from "../Loading";


export default function RegisterForm(props) {

    const navi = useNavigation();
    const { toastRef } = props;
    const[showPassword, setShowPassword] = useState(false);
    const[showReapeatPassword, setShowReapeatPassword] = useState(false);
    const[formData, setFormData] = useState(defaultFormValue());
    const[loading, setLoading] = useState(false);

   const onSubmit = () => {
      if (
          isEmpty(formData.email) ||
         isEmpty(formData.password)||
         isEmpty(formData.repeatPassword)
      ) {
         toastRef.current.show("Todos los campos son obligatorios")
      }else if (!validateEmail(formData.email)) {
        toastRef.current.show("el mail no es correcto");
      }else if ( formData.password !== formData.repeatPassword){
        toastRef.current.show("Las contraseñas tienen que ser iguales")
      }else if(size(formData.password) < 6){
        toastRef.current.show("La contraseña debe tener al menos 6 caracteres")
      }
      else{
    setLoading(true);

        firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
            setLoading(false)
           navi.navigate("account");
        })
        .catch(() => {
            setLoading(false)
            toastRef.current.show("El mail ya esta en uso")

        });
        
      }
   };

   const onChange = (e, type) => {
     setFormData({...formData, [type]:e.nativeEvent.text });
   };

    return(
        <View style={styles.formContainer}>
           <Input
             placeholder="Correo electronico"
             containerStyle={styles.inputForm}
             onChange={(e) => onChange(e, "email")}
             rightIcon={
                 <Icon
                    type="material-community"
                    name="at"
                    iconStyle={styles.iconright}

                 />
             }
           />
           <Input
            placeholder="Contraseña"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={showPassword ? false : true}
            onChange={(e) => onChange(e, "password")}
             rightIcon={
                 <Icon
                 type="material-community"
                 name={showPassword ? "eye-off-outline" : "eye-outline"}
                 iconStyle={styles.iconright}
                 onPress={() => setShowPassword(!showPassword)}
                 />
             }

           />
           <Input
           placeholder="Repetir contraseña"
           containerStyle={styles.inputForm}
           password={true}
            secureTextEntry={showReapeatPassword ? false : true}
            onChange={(e) => onChange(e, "repeatPassword")}
            rightIcon={
                <Icon
                type="material-community"
                name={showReapeatPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.iconright}
                onPress={() => setShowReapeatPassword(!showReapeatPassword) }
                />
            }
           />
           <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
               onPress={onSubmit}
           />
           <Loading isVisible={loading} text="Creando Cuenta" /> 
        </View>
    );
}

function defaultFormValue(){
    return{ 
        email:"",
        password:"",
        repeatPassword:""
    }
    
}

const styles = StyleSheet.create({
   formContainer:{
       flex:1,
       alignContent:"center",
       justifyContent:"center",
       marginTop:30,
   },
   inputForm:{
     width:"100%",
     marginTop:20,
   },
   btnContainerRegister:{
       marginTop:20,
       width:"95%",
   },
   btnRegister:{
       backgroundColor:"#00a680",
   },
   iconright:{
       color:"#00a680"
   },

});