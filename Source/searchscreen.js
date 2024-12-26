import React from "react";
import { Text,View,StyleSheet,TextInput,Image,TouchableOpacity,ScrollView} from "react-native";
import Searchicon from "../assets/spotify/icon//Search-icon.svg"
import Homeicon from "../assets/spotify/icon/Home_icon.svg"
import Searchiconf from "../assets/spotify/icon/Search_icon.svg"
import Libraryicon from "../assets/spotify/icon/Library-small.svg"
const Searchscreen =()=>{
 return(
        <View style={{backgroundColor:"black",flex:1}}>
            <View style={{flexDirection:"row"}}>
            <View style={styles.searchbox} >
               <Searchicon style={{marginTop:10,marginLeft:10}}></Searchicon>
               <TextInput placeholder="Search" placeholderTextColor={"white"} style={styles.inputbox}></TextInput>
            </View>
            <TouchableOpacity>
            <Text style={{color:"white",marginTop:57,fontSize:15,marginLeft:10}}>Cancel</Text>
            </TouchableOpacity>
            </View>
            <Text style={{color:"white",fontSize:17,fontWeight:"bold",marginLeft:15,marginTop:30,}}>Recent Searches</Text>
            <ScrollView>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/library/p1.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>Billie Dany</Text>
            <Text style={{color:"#777777"}}>Artist</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/Home/nandu_pudi.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>Hozier</Text>
            <Text style={{color:"#777777"}}>Artist</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/library/p4.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>Grimes</Text>
            <Text style={{color:"#777777"}}>Artist</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/library/p2.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>Hayas</Text>
            <Text style={{color:"#777777"}}>Artist</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/Home/1_icon.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>1(Remastered)</Text>
            <Text style={{color:"#777777"}}>Album.The Beaties</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/Home/botha_kai.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>LED Zappelin</Text>
            <Text style={{color:"#777777"}}>Artist</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/Home/pulingo.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>Les</Text>
            <Text style={{color:"#777777"}}>Artist</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:30}}>
            <Image source={require("../assets/spotify/image/Home/sting.png")} style={styles.image}></Image>
            <View style={{marginLeft:10}}>
            <Text style={{color:"white",fontSize:15}}>Henry Daniel</Text>
            <Text style={{color:"#777777"}}>Artist</Text>
            </View>
            </View>
            </ScrollView>
        </View>
)};
const styles=StyleSheet.create({
    searchbox:{
        marginTop:50,
        backgroundColor:"#282828",
        width:270,
        height:40,
        flexDirection:"row",
        marginLeft:10,
        borderRadius:10
    },
    inputbox:{
        paddingLeft:20,
        width:300,
        height:40,
    },
    image:{
        width:50,
        height:50
    },
    container:{
        backgroundColor:"black",
        flexDirection:"row",
        height:60,
        alignItems:"center",
        
     }
});
export default Searchscreen;