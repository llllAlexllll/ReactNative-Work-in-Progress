import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import  { Avatar } from "react-native-elements";


export default function InfoUser(props) {
    const {userInfo: {photoURL, displayname, email }} = props;
    


    return(
        <View style={styles.viewUserInfo}>
        <Avatar 
          rounded
          size="large"
          showEditButton
          containerStyle={styles.userInfoAvatar}
          source={
              photoURL ? {uri: photoURL} : require ("../../../assets/img/avatar-default.jpg")
          }
        

        />
        <View>
            <Text style={styles.displayname}>
                {displayname ? displayname : "Anónimo"}
            </Text>
            <Text>
                {email ? email :"Social Login"}
            </Text>
        </View>
        </View>
    );

}

const styles = StyleSheet.create({
    viewUserInfo:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"#f2f2f2",
        paddingTop:30,
        paddingBottom:30,
        
    },
    userInfoAvatar:{
        marginRight:20,
        backgroundColor:"#00a680",
    },
    displayname:{
        fontWeight :"bold",
        paddingBottom: 5,
    },



})