import React from "react";
import { Text,View,StyleSheet,TextInput,Image,ScrollView} from "react-native";
import Back from "../assets/spotify/icon/ChevronLeft.svg";
import Searchcomponent from "./searchcomponent";
import Artistimage from "./artistcomponent";
const Artistcomponent=()=>{
    return(
        <View style={{backgroundColor:"black",flex:1,}}>
        <View style={{flexDirection:"row"}}> 
            <Back style={{marginTop:40,marginLeft:17}}></Back>
            <Text style={{color:"white",marginLeft:23,marginTop:44,fontWeight:"bold",fontSize:16}}>Choose 3 or more artist you like.</Text>
            </View>
           <Searchcomponent></Searchcomponent>
           <ScrollView style={{paddingBottom:90}} showsVerticalScrollIndicator={true}>
            <Artistimage 
            text1="Billie Ellish" 
            text2="Kanye west" 
            text3="Ariane Grande" 
            image1={require("../assets/spotify/image/library/p1.png")}
            image2={require("../assets/spotify/image/library/p2.png")}
            image3={require("../assets/spotify/image/library/p4.png")}>
            </Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p4.png")}
             image2={require("../assets/spotify/image/library/p1.png")}
             image3={require("../assets/spotify/image/library/p2.png")}> 
             </Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p1.png")}
             image2={require("../assets/spotify/image/library/p2.png")}
             image3={require("../assets/spotify/image/library/p4.png")}>
             </Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p4.png")}
             image2={require("../assets/spotify/image/library/p1.png")}
             image3={require("../assets/spotify/image/library/p2.png")}></Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p1.png")}
             image2={require("../assets/spotify/image/library/p2.png")}
             image3={require("../assets/spotify/image/library/p4.png")}></Artistimage>
            </ScrollView>
            </View>
       
    )
};
export default Artistcomponent;