import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Albumicon from "../assets/spotify/image/album/image.svg";
import Hearticon from "../assets/spotify/icon/heart_icon.svg"
import Viewartisticon from "../assets/spotify/icon/viewartist_icon.svg"
import Playlisticon from "../assets/spotify/icon/addtoplaylist_icon.svg"
import Queueicon from "../assets/spotify/icon/addtoqueue_icon.svg"
import Radioicon from "../assets/spotify/icon/Radio_icon.svg"
import Shareicon from "../assets/spotify/icon/share_icon.svg"
import { LinearGradient } from "expo-linear-gradient";
const Albumcontrol=()=>{
    return(
        <LinearGradient
        colors={['#c63224', '#641D17', '#271513', '#121212']}
        style={styles.gradient} >
        <View >
            <Albumicon style={styles.svg} width={200} height={300} />
            <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginLeft:110}}>1(Remastered)</Text>
            <Text style={{color:"#B3B3B3",fontSize:15,marginLeft:140}}>The Beatles</Text>
        </View>
         <View>
       <View  style={styles.container}>
        <TouchableOpacity>
            <Hearticon></Hearticon>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.text}>Like</Text>
        </TouchableOpacity>
        </View>
        <View  style={styles.container}>
            <Viewartisticon></Viewartisticon>
            <TouchableOpacity>
            <Text style={styles.text}>View artist</Text>
            </TouchableOpacity>
            </View>
             <View  style={styles.container}>
            <Shareicon></Shareicon>
            <TouchableOpacity>
            <Text style={{color:"white",marginLeft:26}}>Share</Text>
            </TouchableOpacity>
            </View>
            <View  style={styles.container}>
            <Hearticon></Hearticon>
            <TouchableOpacity>
            <Text style={styles.text}>Like all songs</Text>
            </TouchableOpacity>
            </View>
            <View  style={styles.container}>
            <Playlisticon></Playlisticon>
            <TouchableOpacity>
            <Text style={styles.text}>Add to Playlist</Text>
            </TouchableOpacity>
            </View>
            <View  style={styles.container}>
            <Queueicon></Queueicon>
            <TouchableOpacity>
            <Text style={styles.text}>Add to queue</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.container}>
            <Radioicon></Radioicon>
            <TouchableOpacity>
            <Text style={styles.text}>Go to radio</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <Text style={{color:"white",marginTop:20,marginLeft:160,fontSize:17}}>Close</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    )
};
const styles=StyleSheet.create({
    gradient: {
        flex: 1, 
    },
    svg: {
        marginTop: 40,
        marginLeft:80,
    },
    container:{
        flexDirection:"row",
        marginTop:30,
        marginLeft:25
    },
    text:{
        color:"white",
        marginLeft:20
    }
});
export default Albumcontrol;