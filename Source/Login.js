import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import Google from "../assets/spotify/icon/google_icon.svg"
import Facebook from "../assets/spotify/icon/Facebook_icon.svg"
import Apple from "../assets/spotify/icon/apple_icon.svg"
const Login=()=>{
    return(
        <View style={{backgroundColor:"#121212"}}>
        <Image source={require("../assets/spotify/Login_background_img.png") } style={styles.image} />
           <View  style={styles.container}>
             <Text style={{color:"white",fontSize:34,marginLeft:60,fontWeight:"bold"}}>Millions of song.</Text>
             <Text style={{color:"white",fontSize:31,marginLeft:80,fontWeight:"bold"}}>Free on spotify.</Text>
             <TouchableOpacity style={{backgroundColor:"#46d63e",height:50,width:300,marginLeft:30,borderRadius:40,marginTop:20}}>
                <Text style={{marginTop:10,marginLeft:96,fontSize:19,fontWeight:"bold"}}>Sign up Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Google style={styles.svg}></Google>
                <Text style={styles.buttontext}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Facebook style={styles.svg}></Facebook>
                <Text style={styles.buttontext}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Apple style={{  marginLeft:14,marginTop:13}}></Apple>
                <Text style={styles.buttontext}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color:"white",marginLeft:165,marginTop:10,fontWeight:"bold"}}>Log in</Text>
            </TouchableOpacity>
            </View>
        </View>
      

    )    
};
const styles=StyleSheet.create({
    image:{
       height:400,
       width:360,

    },
    container:{
        
        height:420,
    },
    button:{
        height:50,
        width:300,
        marginLeft:30,
        borderRadius:40,
        marginTop:10,
        borderWidth:1,
        borderColor:"white",
        flexDirection:"row"
    },
    buttontext:{
        marginTop:10,
        marginLeft:60,
        fontSize:16,
        fontWeight:"bold",
        color:"white"
    },
    svg:{
        marginLeft:10,
        marginTop:13
    }
})
export default Login;