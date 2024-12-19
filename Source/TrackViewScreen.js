import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import Albumicon from "../assets/spotify/image/album/image.svg";
import { LinearGradient } from "expo-linear-gradient";
import Backicon from "../assets/spotify/icon/Chevron_left.svg";
import Moreicon from "../assets/spotify/icon/more_icon.svg"
import Hearticon from "../assets/spotify/icon/heart_icon.svg"
import Shuffle from "../assets/spotify/icon/Shuffle_icon.svg"
import Forward from "../assets/spotify/icon/forward_icon.svg"
import Backward from "../assets/spotify/icon/Back_icon.svg"
import Repeaticon from "../assets/spotify/icon/Repeat_icon.svg"
import Bluetoothicon from "../assets/spotify/icon/bluetooth_icon.svg"
import Pauseicon from "../assets/spotify/icon/Pause-icon.svg"
import Shareicon from "../assets/spotify/icon/share_icon.svg"
import Queueicon from "../assets/spotify/icon/addtoqueue_icon.svg"
const Trackview =()=>{
    return(
        <LinearGradient
        colors={['#c63224', '#641D17', '#271513',]}
        style={styles.gradient} >
            <ScrollView>
        <View>
        <View style={{ flexDirection: "row",justifyContent:"space-between",width:330}}>
            <TouchableOpacity>
                <Backicon width={20} height={20} style={styles.backIcon}  />
            </TouchableOpacity>
                <Text style={{color:"white",marginTop:60,fontSize:17,marginLeft:20}}>1(Remasterd)</Text>
                <TouchableOpacity>
                <Moreicon style={styles.backIcon}></Moreicon>
                </TouchableOpacity>
            </View>
            <Albumicon style={styles.svg} width={300} height={300} />
            <View style={{flexDirection:"row"}}>
            <View>
            <Text style={{color:"white",marginTop:60,marginLeft:30,fontSize:18}}>From Me to you-Mono/Remast</Text>
            <Text style={{color:"#B3B3B3",marginTop:5,marginLeft:30,fontSize:15}}>The Betless</Text>
            </View>
            <TouchableOpacity>
            <Hearticon style={{marginLeft:30,marginTop:50}}></Hearticon>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor:"#777777",width:310,height:4,marginTop:30,marginLeft:20,borderRadius:10}}>
                <View style={{backgroundColor:"white",width:180,height:4}}>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",width:330}}>
            <Text style={{color:"#B3B3B3",marginLeft:20}}>0.38</Text>
            <Text style={{color:"#B3B3B3",marginLeft:20}}>-1.18</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:20}}>
            <TouchableOpacity>
            <Shuffle style={{marginLeft:15,marginTop:18}}></Shuffle>
            </TouchableOpacity>
            <TouchableOpacity>
            <Backward style={{marginLeft:50,marginTop:8}}></Backward>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{width:50,height:50,backgroundColor:"white",borderRadius:50,marginLeft:30}}>
            <Pauseicon style={{marginLeft:17,marginTop:15}}></Pauseicon>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Forward style={{marginLeft:40,marginTop:13}}></Forward>
            </TouchableOpacity>
            <TouchableOpacity>
            <Repeaticon style={{marginLeft:40,marginTop:15}}></Repeaticon>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",marginTop:15,marginLeft:10}}>
            <TouchableOpacity>
            <Bluetoothicon></Bluetoothicon>
            </TouchableOpacity>
            <Text style={{color:"green",marginTop:5}}>BEATSPILL+</Text>
            <TouchableOpacity>
            <Shareicon style={{marginLeft:150}}></Shareicon>
            </TouchableOpacity>
            <TouchableOpacity>
            <Queueicon style={{marginLeft:30}}></Queueicon>
            </TouchableOpacity>
            </View>
            <View style={{height:300,width:320,borderRadius:10,backgroundColor:"#d16521",marginTop:20,marginLeft:20}}>
                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginTop:10,marginLeft:10}}>Lyrics</Text>
                <View style={{backgroundColor: "rgba(0, 0, 0, 0.6)",marginLeft:150,marginTop:10,width:90,height:30,borderRadius:20}}>
                    <TouchableOpacity>
                    <View style={{flexDirection:"row"}}>
                    <Text style={{color:"white",marginLeft:18,marginTop:5,fontWeight:"bold"}}>More</Text>
                    <Moreicon></Moreicon>
                    </View>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
        </ScrollView>
        </LinearGradient>
    )
};
const styles=StyleSheet.create({
    gradient: {
        flex: 1, 
    },
    svg: {
        marginTop: 70,
        marginLeft:30,
    },
    backIcon: {
        marginLeft: 10,
        marginTop: 60,
    },
})
export default Trackview;