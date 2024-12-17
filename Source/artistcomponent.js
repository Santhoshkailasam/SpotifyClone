import { Text,View,StyleSheet,TextInput,Image } from "react-native";
import { ScrollView } from "react-native";
const Artistimage=(props)=>{
    return(
        <View> 
        <View style={{flexDirection:"row"}}>
        <Image  source={props.image1} style={styles.image}></Image>
        <Image  source={props.image2} style={styles.image}></Image>
        <Image source={props.image3} style={styles.image}></Image>
        </View>
        <View  style={{flexDirection:"row"}}>
        <Text style={{color:"white",marginLeft:29,fontSize:14}}>{props.text1}</Text>
        <Text style={{color:"white",marginLeft:50,fontSize:14}}>{props.text2}</Text>
        <Text style={{color:"white",marginLeft:44,fontSize:14}}>{props.text3}</Text>
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