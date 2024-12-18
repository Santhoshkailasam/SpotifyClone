import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Albumicon from "../assets/spotify/image/album/image.svg";
import Backicon from "../assets/spotify/icon/Chevron_left.svg";
import { LinearGradient } from "expo-linear-gradient";
import Hearticon from "../assets/spotify/icon/heart_icon.svg"
import Moreicon from "../assets/spotify/icon/more_icon.svg"
import Downloadicon from"../assets/spotify/icon/download_icon.svg"
import Pause from "../assets/spotify/icon/Pause-icon.svg"
const AlbumViewscreen = (props) => {
    return (
        <LinearGradient
            colors={['#c63224', '#641D17', '#271513', '#121212']}
            style={styles.gradient} >
            <View style={{ flexDirection: "row" }}>
                    <Backicon width={20} height={20} style={styles.backIcon}  />
                <Albumicon style={styles.svg} width={200} height={300} />
            </View>
            <View>
                <Text style={{fontSize:25,color:"white",marginLeft:20,fontWeight:"bold"}}>1(Remastered)</Text>
                <View style={{flexDirection:"row"}}>
                    <Image source={require("../assets/spotify/image/library/p4.png")} style={{width:30,height:30,marginLeft:20,marginTop:10}}></Image>
                    <Text style={{color:"white",marginLeft:10,marginTop:12,fontWeight:"bold"}}>The Beatless</Text>
                </View>
                <View style={{flexDirection:"row"}}> 
                    <Text style={{color:"#777777",marginLeft:20,marginTop:10,fontWeight:"bold"}}>Album</Text>
                    <Text style={{color:"#777777",marginLeft:10,marginTop:10,fontWeight:"bold",fontSize:20,lineHeight:17,}}>.</Text>
                    <Text style={{color:"#777777",marginLeft:10,marginTop:11,fontWeight:"bold"}}>2000</Text>
                   <View style={styles.circle}>
                    <Pause style={{marginTop:15}}></Pause>
                   </View>
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row"}}>
                 <TouchableOpacity>
                  <Hearticon style={{marginLeft:20,marginTop:12}}></Hearticon>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Downloadicon style={styles.icons}></Downloadicon>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Moreicon style={{marginLeft:20,marginTop:7}}></Moreicon>
                  </TouchableOpacity>
                </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1, 
    },
    svg: {
        marginTop: 80,
        marginLeft: 30,
    },
    backIcon: {
        marginLeft: 10,
        marginTop: 60,
    },
    icons:{
       marginLeft:20,
       marginTop:10
    },
    circle:{
        backgroundColor:"#4cad3d",
        width:50,
        height:50,
        position:"absolute",
        borderRadius:50,
        marginLeft:280,
        alignItems:"center"
    }
});

export default AlbumViewscreen;
