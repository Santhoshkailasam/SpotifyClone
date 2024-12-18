import React from "react";
import { Text,View,StyleSheet,Image,TouchableOpacity} from "react-native";
import Bluetoothicon from "../assets/spotify/icon/bluetooth_icon.svg"
const PlayBoxComponent =()=>{
    return(
        <View style={styles.playbox}>
            <Image source={require("../assets/spotify/image/Home/1_icon.png")} style={{ marginLeft:8, width: 40, height: 40, marginTop: 10 }}></Image>
            <View>
                <View style={{ flexDirection: "row", marginLeft: 5 }}>
                    <View>
                    <View style={{ marginTop:12,flexDirection:"row" }}>
                        <Text style={{ color: "white", fontSize: 12,marginLeft:9,fontWeight:"bold" }}>From Me to You-Mono/Remastered</Text>
                    <View>
                        <Text style={{ color: "white", fontSize: 26, lineHeight: 18, textAlignVertical: "center" }}>.</Text>
                    </View>
                    <Text style={{ color: "#B3B3B3", marginTop: 0, fontSize: 12 }}>The B</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Bluetoothicon width={20} height={20}></Bluetoothicon>
                        <Text style={{ color: "#1DB954", fontSize: 12,marginTop:2 }}>BEATSPILL+</Text>
                    </View>
                    </View>
                    <Bluetoothicon wwidth={30} height={30} style={{marginTop:15}}></Bluetoothicon>
                    <TouchableOpacity>
                        <View style={{flexDirection:"row"}}>
                        {/*Left bar*/}
                     <View style={styles.bar}></View>
                     {/* Right Bar */}
                     <View style={styles.bar}></View>
                     </View>
                     </TouchableOpacity>
                    </View>
                    </View>  
                   </View>
    )
};
const styles=StyleSheet.create({
    playbox:{
        backgroundColor:"#550A1C",
        width:345,
        height:60,
        marginLeft:10,
        borderRadius:4,
        flexDirection:"row",
        borderBottomColor:"white",
        borderBottomWidth:1
    },
    bar: {
        width: 5, 
        height: 20, 
        marginHorizontal: 4, // Spacing between the bars
        backgroundColor: "white", // Bar color
        borderRadius: 2, // Optional rounded edges
        marginTop:20,
        

      }

})
export default PlayBoxComponent;