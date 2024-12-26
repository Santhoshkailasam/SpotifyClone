import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,ScrollView} from "react-native";
import Searchcomponent from "../Components/searchcomponent";
import Podcastimage from "../Components/podcastimagecomponent";
import { useNavigation } from "@react-navigation/native";
const Podcast = () =>{
    const navigation=useNavigation();
    const gotohome=()=>{
        navigation.navigate("Home")
    }
    return(
        <View style={{backgroundColor:"black",flex:1}}>
            <Text style={styles.text}>Now choose some podcasts.</Text>
            <Searchcomponent></Searchcomponent>
            <ScrollView>
            <Podcastimage
             image1={require("../assets/spotify/image/library/pi1.png") }
             image2={require("../assets/spotify/image/library/pi2.png") }
             image3={require("../assets/spotify/image/library/pi3.png") }></Podcastimage>
            <Podcastimage 
            image1={require("../assets/spotify/image/library/pi4.png") }
            image2={require("../assets/spotify/image/library/pi5.png") }
            image3={require("../assets/spotify/image/library/pi3.png") }></Podcastimage>
            <Podcastimage
            image1={require("../assets/spotify/image/library/pi2.png") }
            image2={require("../assets/spotify/image/library/pi4.png") }
            image3={require("../assets/spotify/image/library/pi3.png") }></Podcastimage>
            <Podcastimage
            image1={require("../assets/spotify/image/library/pi5.png") }
            image2={require("../assets/spotify/image/library/pi1.png") }
            image3={require("../assets/spotify/image/library/pi3.png") }></Podcastimage>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={gotohome}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Done</Text>
            </TouchableOpacity>
            </View>
    )
};
const styles=StyleSheet.create({
    text:{
         color:"white",
         marginTop:50,
         fontSize:30,
         fontWeight:"bold",
         marginLeft:20
    },
    button:{
        backgroundColor:"white",
        width:90,
        height:35,
        marginLeft:140,
        position: "absolute",
        bottom:101,
        borderRadius:17,
        alignItems:"center",
        paddingTop:5,
      
    }
});
export default Podcast;