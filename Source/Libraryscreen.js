import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import Addicon from "../assets/spotify/icon/add_icon.svg"
import { LinearGradient } from "expo-linear-gradient";
import Hearticon from "../assets/spotify/icon/heart_icon.svg"
import Pinicon from "../assets/spotify/icon/pin_icon.svg"
import Notificationicon from "../assets/spotify/icon/notification_icon"
import Homeicon from "../assets/spotify/icon/Home_icon.svg"
import Searchicon from "../assets/spotify/icon/Search-icon.svg"
import Libraryicon from "../assets/spotify/icon/Library_icon_filled.svg"
const LibraryScreen =()=>{
    return(
    <View style={{backgroundColor:"black",flex:1}}>
        <View style={{flexDirection:"row",marginTop:50}}>
        <Image source={require("../assets/spotify/image/library/p1.png")} style={{width:40,height:40,marginLeft:20}}></Image>
      <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginLeft:10,marginTop:5}}>Your Library</Text>
     <TouchableOpacity>
      <Addicon style={{marginLeft:120,marginTop:10}}></Addicon>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={{borderColor:"#7F7F7F",borderRadius:20,borderWidth:1,width:70,height:35,marginTop:20,marginLeft:15}}>
        <Text style={styles.text}>Playlists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav}>
        <Text style={styles.text}>Artists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav}>
        <Text style={styles.text}>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:"#7F7F7F",borderRadius:20,borderWidth:1,width:120,height:35,marginTop:20,marginLeft:3}}>
        <Text style={styles.text}>Podcasts & shows</Text>
        </TouchableOpacity>
        </View>
        <Text style={{color:"white",marginTop:10,marginLeft:15,fontSize:18}}>Recently Played</Text>
        <ScrollView>
        <TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <LinearGradient colors={['#4A39EA' ,'#868AE1','#B9D4DB']} style={{width:100,height:100,marginLeft:10,marginTop:20,alignItems:"center"}}>
         <Hearticon style={{marginTop:20}}  width={40} height={40}></Hearticon>
        </LinearGradient>
        <View>
        <Text style={{color:"white",fontWeight:"bold",marginLeft:20,marginTop:30,fontSize:20}}>Liked Songs</Text>
        <View style={{flexDirection:"row"}}>
        <Pinicon style={{marginLeft:20,marginTop:5}}></Pinicon>
        <Text style={{color:"#B3B3B3",marginLeft:5}}>Playlist-58 Songs</Text>
        </View>
        </View>
        </View>
       </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <View style={{width:100,height:100,marginLeft:10,marginTop:20,alignItems:"center",backgroundColor:"#70218a"}}>
        <Notificationicon width={40}  height={40} style={{marginTop:25}}></Notificationicon>
        </View>
        <View>
        <Text style={{color:"white",fontWeight:"bold",marginLeft:20,marginTop:30,fontSize:20}}>New Episodes</Text>
        <View style={{flexDirection:"row"}}>
        <Pinicon style={{marginLeft:20,marginTop:5}}></Pinicon>
        <Text style={{color:"#B3B3B3",marginLeft:5}}>Updated 2 days ago</Text>
        </View>
        </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <Image source={require("../assets/spotify/image/library/p3.png")}style={{width:110,height:110,marginTop:20}} ></Image>
           <View style={{color:"white",marginLeft:20,marginTop:30}}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Lolo Zoui</Text>
            <Text style={{color:"#B3B3B3"}}>Artist</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <Image source={require("../assets/spotify/image/library/p2.png")}style={{width:110,height:110,marginTop:20}} ></Image>
           <View style={{color:"white",marginLeft:20,marginTop:30}}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Lana Del Ray</Text>
            <Text style={{color:"#B3B3B3"}}>playlist-Spotify</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <Image source={require("../assets/spotify/image/library/p4.png")}style={{width:110,height:110,marginTop:20}} ></Image>
           <View style={{color:"white",marginLeft:20,marginTop:30}}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Front Left</Text>
            <Text style={{color:"#B3B3B3"}}>Artist</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <Image source={require("../assets/spotify/image/library/p5.png")}style={{width:110,height:110,marginTop:20}} ></Image>
           <View style={{color:"white",marginLeft:20,marginTop:30}}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Marvin Gaye</Text>
            <Text style={{color:"#B3B3B3"}}>Artist</Text>
            </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
        <View style={styles.container}> 
        <View>
        <TouchableOpacity>
        <Homeicon style={{marginLeft:30,}}></Homeicon>
        <Text style={{color:"#777777",marginLeft:20}}>Home</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
        <Searchicon style={{marginLeft:100,}}></Searchicon>
        <Text style={{color:"#777777",marginLeft:92}}>Search</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
        <Libraryicon style={{marginLeft:100,}}></Libraryicon>
        <Text style={{color:"white",marginLeft:80}}>Your Library</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
    )
};
const styles=StyleSheet.create({
   text:{
    color:"white",
    marginLeft:15,
    marginTop:8,
    fontSize:11,
    fontWeight:"bold"
   },
   nav:{
    borderColor:"#7F7F7F",
    borderRadius:20,
    borderWidth:1,
    width:70,
    height:35,
    marginTop:20,
    marginLeft:3
   },
   container:{
    backgroundColor:"black",
    flexDirection:"row",
    height:60,
    alignItems:"center",  
 }
});
export default LibraryScreen;