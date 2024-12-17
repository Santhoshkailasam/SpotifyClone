import React from "react";
import { Text,View,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native";
import Notificationicon from "../assets/spotify/icon/notificationicon.svg"
import Settingsicon from "../assets/spotify/icon/Settings.svg"
import Orientationlockicon from "../assets/spotify/icon/orientation lock.svg"
import Artistimage from "../Components/artistcomponent";
import Album from "../assets/spotify/image/album/image.svg"
import Footer from "../Components/footercomponent";
import Bluetoothicon from "../assets/spotify/icon/bluetooth_icon.svg"
import Pausecolor from "../assets/spotify/icon/pause_icon_full.svg"
const Homescreen =()=>(
    <View style={{ backgroundColor: "black", flex: 1, }}>
        <View style={{ flexDirection: "row", paddingTop: 40, justifyContent: "space-between" }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>
                Recently played
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: 130, marginLeft: 0 }}>
                <TouchableOpacity>
                    <Notificationicon style={{ marginTop: 5 }}></Notificationicon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Orientationlockicon style={{ marginTop: 5 }}></Orientationlockicon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Settingsicon style={{ marginTop: 3 }}></Settingsicon>
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
            <View>
                <Album style={styles.svg} width={90} height={90}></Album>
                <Text style={{ color: "white", fontSize: 12, marginLeft: 12 }}>1(Remastered)</Text>
            </View>
            <Artistimage
                image1={require("../assets/spotify/image/library/p2.png")} valueImage={1}
                image2={require("../assets/spotify/image/library/p4.png")}
                image3={require("../assets/spotify/image/library/p5.png")}
                text1="Lana Del Ray"
                text2="Marvin Gaye"
                text3="India no"
                valueText={0}></Artistimage>
        </View>
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
            <Image source={require("../assets/spotify/image/Home/sponser.png")}
                style={styles.image}></Image>
            <View style={{ marginTop: 30, marginLeft: 10 }}>
                <Text style={{ color: "#777777", fontSize: 12 }}>#SPOTIFYWRAPPED</Text>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>Your 2021 in review</Text>
            </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, paddingLeft: 10 }}>
            <View>
                <Image source={require("../assets/spotify/image/Home/year.png")}
                    style={{ width: 130, height: 140 }}></Image>
                <Text style={styles.songs}>Your Top songs 2021</Text>
            </View>
            <View>
                <Image source={require("../assets/spotify/image/Home/your_artists.png")}
                    style={{ width: 130, height: 140, marginLeft: 10 }}></Image>
                <Text style={{ color: "white", marginLeft: 10, fontSize: 12 }}>Your Artist Revealed</Text>
            </View>
        </View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginLeft: 10, marginTop: 12 }}>Editor's picks</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
            <View>
                <Image source={require("../assets/spotify/image/Home/nandu_pudi.png")} style={{ height: 150, width: 150, marginLeft: 10 }}></Image>
                <Text style={{ color: "#777777", fontSize: 12, width: 140, marginLeft: 10 }}>Ed sheeran,Big Sean,Juice WORLD,Post Malone</Text>
            </View>
            <View>
                <Image source={require("../assets/spotify/image/Home/botha_kai.png")} style={{ height: 150, width: 150, marginLeft: 10 }}></Image>
                <Text style={{ color: "#777777", fontSize: 12, width: 140, marginLeft: 10 }}>Mitski,Tama Impala,Glass Animals,Charli XCX</Text>
            </View>
            <Image source={require("../assets/spotify/image/Home/sting.png")} style={{ height: 150, width: 150, marginLeft: 10 }}></Image>
        </View>
        </ScrollView>
        </ScrollView>
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
        <Footer></Footer>
    </View>
);
const styles= StyleSheet.create({
    svg:{
        marginTop:30,
        marginLeft:8,
    },
    image:{
        height:70,
        width:70,
        marginTop:20,
        marginLeft:10
    },
    songs:{
        color:"white",
        fontSize:12,
    },
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
});
export default Homescreen;