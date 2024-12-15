import React from "react";
import { Text,StyleSheet,View,TextInput,TouchableOpacity} from "react-native";
import  Backicon from "../assets/spotify/icon/ChevronLeft.svg";
import Tick from "../assets/spotify/icon/tick_icon.svg"
const Signupcomponent = (props) =>{
    return(
        <View style={{backgroundColor:"black",flex:1}}>
        <View style={{flexDirection:"row",marginTop:40,marginLeft:13}}>
            <Backicon style={styles.svg}></Backicon>
            <Text style={{color:"white",marginLeft:90,marginTop:5,fontWeight:"bold",fontSize:16}}>Create account</Text>
            </View>
            <Text style={styles.emailtext}>{props.text}</Text>
        <View style= {styles.inputbox}>
        <TextInput />
        {props.icon && <View style={styles.tick}>{props.icon}</View>}
        </View>
        <Text style={{color:"white",marginLeft:25,fontSize:10,marginTop:5}}>{props.must}</Text>
        <TouchableOpacity style={{backgroundColor:"#777777",width:100,height:40,borderRadius:40,marginLeft:130,paddingLeft:35,paddingTop:8,marginTop:30}}>
            <Text>Next</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    inputbox:{
        backgroundColor:'#777777',
        height:45,
        width:310,
        marginLeft: 25,
        flexDirection:"row",
        borderRadius:5
    },
    emailtext:{
        color:"white",
        marginTop:40,
        fontWeight:"bold",
        fontSize:20,
        marginLeft:25
    },
    tick:{
        marginLeft:260,
        marginTop:15
    }
}
)
export default Signupcomponent;