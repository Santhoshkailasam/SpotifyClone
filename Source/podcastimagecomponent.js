
import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image} from "react-native";
const Podcastimage=(props)=>{
    return(
        <View >
        <View style={{flexDirection:"row"}}>
        <Image style={styles.image} source={props.image1}></Image>
        <Image style={styles.image} source={props.image2} ></Image>
        <Image style={styles.image} source={props.image3}></Image>
    </View>
    <View style={{flexDirection:"row"}}>
        <Text style={{color:"white",marginTop:10,marginLeft:30}}>My  brother</Text>
        <Text style={{color:"white",marginTop:10,marginLeft:50}}>Distractible</Text>
    </View>
    </View>
    )
};
const styles=StyleSheet.create({
    image:{
        height:95,
        width:95,
        marginTop:40,
        marginLeft:20
    }
});
export default Podcastimage;