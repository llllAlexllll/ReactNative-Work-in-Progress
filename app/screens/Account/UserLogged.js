import React, { useRef, useState, useEffect } from "react";
import { StyleSheet,View, Text} from "react-native";
import { Button } from "react-native-elements"
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import InfoUser from "../../components/Account/InfoUser";

export default function UserLogged() {
    const [ userInfo, setUserInfo ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingtext, setloadingtext] = useState("");
    const toastRef = useRef();

    useEffect(() => {
        (async() => {
            const user = await firebase.auth().currentUser;
            setUserInfo(user);
        })()

    },[])

    return(
        <View style={style.viewUserInfo}>
            
            {userInfo &&  <InfoUser userInfo={userInfo} />}
           

            <Text>AccountOption</Text>

            <Button 
            title="Cerrar sesion" 
            onPress={() => firebase.auth().signOut()} 
            buttonStyle={style.btnCloseSession}
            titleStyle={style.btnCloseSessionText}

            
            />
            <Toast ref={toastRef} position="center" opacity={0.9} />
            <Loading text={loadingtext} isVisible={loading} />
        </View>
    );
}

const style = StyleSheet.create({

    viewUserInfo:{
        minHeight:"100%",
        backgroundColor:"#f2f2f2"
    },
    btnCloseSession:{
        marginTop: 30,
        borderRadius:1,
        backgroundColor:"#fff",
        borderTopWidth:1,
        borderTopColor:"#e3e3e3",
        borderBottomWidth:1,
        borderTopWidth:1,
        paddingTop:10,
        paddingBottom:10,
    },
    btnCloseSessionText:{
        color:"#00a680",
    },



});