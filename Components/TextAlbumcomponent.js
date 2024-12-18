import React from "react";
import { Text, View,StyleSheet,TouchableOpacity} from "react-native";
import Moreicon from "../assets/spotify/icon/more_icon.svg"
import Downloadicon from "../assets/spotify/icon/download_icon.svg"
const Albumtext = ({text,Color})=>{
    return(
           <View >
            <View style={{flexDirection:"row"}}>
            <View>
            <TouchableOpacity>
            <Text style={[styles.text,{color:Color,position:"relative",fontWeight:"bold"}]}>{text}</Text>
            <View  style={{flexDirection:"row",marginLeft:20,marginTop:2}}>
            <Downloadicon></Downloadicon>
            <Text style={{color:"white",marginLeft:3}}>The Beatless</Text>
            </View>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={{marginLeft:323,marginTop:25,position:"absolute"}}>
            <Moreicon ></Moreicon>
            </TouchableOpacity>
            </View>
           </View>
  )
}  
const styles=StyleSheet.create({
    text:{
        marginLeft:20,
        marginTop:10,
        fontSize:15

    }
})
export default Albumtext;   

    