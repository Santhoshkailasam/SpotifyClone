import React, { useState } from "react";
import { Text,View,StyleSheet,TouchableOpacity,TextInput} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../service/firebaseAuth";
import { useNavigation } from "@react-navigation/native";
const Loginscreen =()=>{
    const[Email,setEmail]= useState("");
    const[Password,setpassword]=useState("");
    const[Error,setError]=useState("");
    const navigation=useNavigation();
    const isInputFilled = Email.length > 0 && Password.length > 0;
    const Handler =()=>{
        setError("");
        signInWithEmailAndPassword(auth,Email,Password)
        .then((userCredential) => {
            const user=userCredential.user;
            navigation.navigate("Home")
        })
        .catch((error) =>{
             console.log(error)
             setError(error.message)
        })
    }
    const gotoregisterscreen=()=>{
        navigation.navigate('Home')
    }
    return(
        <View style={{backgroundColor:"black",flex:1}}>
            <View style={{marginTop:60}}>
            <Text style={styles.text}>Email or Username</Text>
            <TextInput onChangeText={setEmail} style={styles.inputbox} ></TextInput>
            <Text style={[styles.text,{marginTop:40}]}>Password</Text>
            <TextInput onChangeText={setpassword} style={styles.inputbox} secureTextEntry></TextInput>
            <View style={{alignItems:"center",marginTop:20}}>
            <TouchableOpacity style={[styles.btn,{ backgroundColor: isInputFilled ? "white" : "#877e7e" },]}onPress={Handler}  >
                <Text style={{fontSize:20,marginTop:10}}>Log in</Text>
            </TouchableOpacity>
            </View>
            <View style={{alignItems:"center"}}>
            <TouchableOpacity style={{alignItems:"center",borderColor:"#877e7e",borderWidth:1,width:230,marginTop:30,borderRadius:30,height:25}} onPress={gotoregisterscreen}>
                <Text style={{color:"white"}}>Don't have an Account?click here</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginLeft:60,marginTop:10}}>
            {Error && <Text style={{color:"red"}}>{Error}</Text> } 
            </View>
            </View>

        </View>
    )
};
const styles=StyleSheet.create({
 text:{
    color:"white",
    fontSize:30,
    marginLeft:10,
    fontWeight:"bold"
 },
 inputbox:{
    backgroundColor:"#706968",
    marginLeft:10,
    height:50,
    width:330,
    borderRadius:5,
    color:"white",
    fontSize:17
 },
 btn:{
    backgroundColor:"#877e7e",
    marginTop:40,
    alignItems:"center",
    width:100,
    height:50,
    borderRadius:40
}
})
export default Loginscreen; 