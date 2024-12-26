import React from "react";
import { Text,View,ScrollView,TouchableOpacity} from "react-native";
import Back from "../assets/spotify/icon/ChevronLeft.svg";
import Searchcomponent from "../Components/searchcomponent";
import Artistimage from "../Components/artistcomponent";
import { useNavigation } from "@react-navigation/native";
const Artist=()=>{
 const navigation=useNavigation()
 const gotopodcast=()=>{
    navigation.navigate("Podcast")
 }
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
            image3={require("../assets/spotify/image/library/p4.png")}
            isSelectable={true}
            valueImage={0}>
            </Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p4.png")}
             image2={require("../assets/spotify/image/library/p1.png")}
             image3={require("../assets/spotify/image/library/p2.png")}
             isSelectable={true}
             valueImage={0}> 
             </Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p1.png")}
             image2={require("../assets/spotify/image/library/p2.png")}
             image3={require("../assets/spotify/image/library/p4.png")}
             isSelectable={true}
             valueImage={0}>
             </Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p4.png")}
             image2={require("../assets/spotify/image/library/p1.png")}
             image3={require("../assets/spotify/image/library/p2.png")}
             isSelectable={true}
             valueImage={0}></Artistimage>
            <Artistimage
             text1="Billie Ellish" 
             text2="Kanye west" 
             text3="Ariane Grande" 
             image1={require("../assets/spotify/image/library/p1.png")}
             image2={require("../assets/spotify/image/library/p2.png")}
             image3={require("../assets/spotify/image/library/p4.png")}
             isSelectable={true}
            valueImage={0}></Artistimage>
            </ScrollView>
            <TouchableOpacity style={{ backgroundColor:"white",width:90,height:35,marginLeft:140,position: "absolute",bottom:101,borderRadius:17,alignItems:"center",paddingTop:5,}} onPress={gotopodcast}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Done</Text>
            </TouchableOpacity>
            </View>
       
    )
};
export default Artist;