import { Text,View,StyleSheet,TextInput,Image } from "react-native";
import { ScrollView } from "react-native";
const Artistimage=(props)=>{  
    const stylesBasedOnValueImage = props.valueImage==1
    ?{height:90,width:90}
    :{height:100,width:100};
    const stylesBasedOnValueText= props.valueText ==0
    ?{fontSize:12,marginLeft:29}
    :{fontsize:25}
    return(
        <View> 
        <View style={{flexDirection:"row"}}>
        <Image  source={props.image1} style={[styles.image,stylesBasedOnValueImage]}></Image>
        <Image  source={props.image2} style={[styles.image,stylesBasedOnValueImage]}></Image>
        <Image source={props.image3} style={[styles.image,stylesBasedOnValueImage]}></Image>
        </View>
        <View  style={{flexDirection:"row"}}>
        <Text style={[{color:"white",marginLeft:29,fontSize:14},stylesBasedOnValueText]}>{props.text1}</Text>
        <Text style={[{color:"white",marginLeft:50,fontSize:14},stylesBasedOnValueText]}>{props.text2}</Text>
        <Text style={[{color:"white",marginLeft:44,fontSize:14},stylesBasedOnValueText]}>{props.text3}</Text>
        </View>
        </View>
    )
};
const styles=StyleSheet.create({
    image:{
        width:105,
        height:105,
        marginLeft:13,
        marginTop:26
    },
    text:{
        color:"white",
        marginLeft:28,
        fontSize:14

    }
})
export default Artistimage;