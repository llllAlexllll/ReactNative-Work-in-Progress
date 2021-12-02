import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation} from "@react-navigation/native";

export default function UserGuest() {
const navigation = useNavigation();


    return(
        <ScrollView centerContent={true}>
            <Image
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil</Text>
            <Text style={styles.description}>
                ¿Como describirias tu mejor restaurante? Busca y visualiza los
                mejores restaurantes de una forma sensilla , vota cual es tu
                favorito y comenta tu experiencia.
            </Text>
            <View style={styles.btnView}>
                <Button
                 title="Ver tu perfil"
                 buttonStyle={styles.btnStyle}
                 containerStyle={styles.btncontainer}
                 onPress={() => navigation.navigate("login")}
                />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
        
    },

    image:{
        height: 300,
        width: "100%",
        marginBottom: 40,
    },

    title:{
        fontWeight:"bold",
        fontSize: 19,
        marginBottom:10,
        textAlign:"center",
    },
    description:{
        textAlign:"center",
        marginBottom:20,
    },
    btnView:{
        alignItems:"center",
        flex:1,
    },
    btnStyle:{
        backgroundColor:"#00a680",
    },
    btncontainer:{
        width:"70%",
    },
    



});