import React,{ useState } from "react";
import {StyleSheet, View} from "react-native";
import { Input,Icon,Button } from "react-native-elements";
import { isEmpty } from "lodash";
import {validateEmail} from "../../utils/validations";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native"; 
import Loading from "../Loading";


export default function LoginForm(props){

    const {toastRef} = props;
    const [loading, setLoading] = useState(false);
    const navi = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text});
    };

    const onSubmit = () => {
        if(isEmpty(formData.email) || isEmpty(formData.password)) {
            toastRef.current.show("Todos los campos son obligatorios")
        } else if(!validateEmail(formData.email)) {
            toastRef.current.show("El mail no es valido")
        }else{
            setLoading(true);
            firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(() =>{
                setLoading(false);
                navi.navigate("account");
            })
            .catch(() => {
                setLoading(false);
                 toastRef.current.show("Email o contraseña incorrecta");
            })
        }
    };

    return(
        <View Style={styles.formCount}>
            <Input
                placeholder="Correo Electronico"
                containerStyle={styles.imputForm}
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
                containerStyle={styles.imputForm}
                password={true}
                onChange={(e) => onChange(e, "password")}
                secureTextEntry={showPassword ? false : true}
                rightIcon={
                <Icon
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.iconright}
                onPress={() => setShowPassword(!showPassword)}
                />
            }
            />
            <Button
                title="Iniciar sesion"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
                />
            <Loading isVisible={loading} text="Iniciando Sesion"/>
        </View>
    )

}

function defaultFormValue(){
    return{
        email:"",
        password:"",

    };
        
    
}

const styles = StyleSheet.create({

    formCount:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    imputForm:{
        width:"100%",
        marginTop:20,
    },
    btnContainerLogin:{
        marginTop:20,
        width:"95%",
    },
    btnLogin:{
        backgroundColor:"#00a680",
    },
    iconright:{
        color:"#00a680"
    },
})