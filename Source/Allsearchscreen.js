import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image,ScrollView} from "react-native";
import Searchcomponent from "../Components/searchcomponent";
import Cameraicon from "../assets/spotify/icon/camera_icon.svg"
import AllsearchComponent from "../Components/all searchcomponent";
import Album from "../assets/spotify/image/album/image.svg"
import Footer from "../Components/footercomponent";
import Bluetoothicon from "../assets/spotify/icon/bluetooth_icon.svg"
import Pausecolor from "../assets/spotify/icon/pause_icon_full.svg"
import Homeicon from "../assets/spotify/icon/Home_icon.svg"
import Searchiconf from "../assets/spotify/icon/Search_icon.svg"
import Libraryicon from "../assets/spotify/icon/Library-small.svg"
const Searchall =()=>{
    return(
        <View style={{backgroundColor:"black",flex:1,}}>
            <ScrollView>
            <View style={{flexDirection:"row"}}>
            <Text style={{marginTop:50,marginLeft:20,fontSize:20,fontWeight:"bold",color:"white"}}>Search</Text>
            <TouchableOpacity>
            <Cameraicon style={{marginLeft:230,marginTop:50}}></Cameraicon>
            </TouchableOpacity>
            </View>
            <Searchcomponent></Searchcomponent>
            <View style={{flexDirection:"row"}}>
            <AllsearchComponent text="Your top Genres"
            text1="Pop"
            color="violet"
            showheader={true}
            Top={50}
            ></AllsearchComponent>
             <AllsearchComponent 
            text1="Pop"
            color="green"
            showheader={false}
            Top={50}
            ></AllsearchComponent>
            </View>
            <View style={{flexDirection:"row"}}>
            <AllsearchComponent text="Popular podcast categories"
            text1="News & politics"
            color="blue"
            showheader={true}
            Top={60}
            ></AllsearchComponent>
             <AllsearchComponent 
            text1="Comedy"
            color="orange"
            showheader={false}
            Top={60}
            ></AllsearchComponent>
            </View>
            <View style={{flexDirection:"row"}}>
            <AllsearchComponent text="Browse All"
            text1="2021 Wrapped"
            color="#66b846"
            showheader={true}
            Top={50}
            ></AllsearchComponent>
             <AllsearchComponent 
            text1="Podcasts"
            color="#3e3c8c"
            showheader={false}
            Top={50}
            ></AllsearchComponent>
            </View>
            <View style={{flexDirection:"row"}}>
            <AllsearchComponent 
            text1="Made for you"
            color="lightgreen"
            showheader={false}
            Top={15}
            ></AllsearchComponent>
             <AllsearchComponent text="Your top Genres"
            text1="Pop"
            color="#9e57b5"
            showheader={false}
            Top={15}
            ></AllsearchComponent>
            </View>
            </ScrollView>
            <View style={styles.playbox}>
            <Image source={require("../assets/spotify/image/Home/1_icon.png")} style={{ marginLeft:8, width: 40, height: 40, marginTop: 10 }}></Image>
            <View>
                <View style={{ flexDirection: "row", marginLeft: 5 }}>
                    <View>
                    <View style={{ marginTop:12,flexDirection:"row" }}>
                        <Text style={{ color: "white", fontSize: 12,marginLeft:9,fontWeight:"bold" }}>Easy</Text>
                    <View>
                        <Text style={{ color: "white", fontSize: 26, lineHeight: 18, textAlignVertical: "center" }}>.</Text>
                    </View>
                    <Text style={{ color: "#B3B3B3", marginTop: 0, fontSize: 12 }}>Troye Sivan</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Bluetoothicon width={20} height={20}></Bluetoothicon>
                        <Text style={{ color: "#1DB954", fontSize: 12,marginTop:2 }}>BEATSPILL+</Text>
                    </View>
                    </View>
                    <Bluetoothicon width={30} height={30} style={{marginTop:15,marginLeft:100}}></Bluetoothicon>
                    <TouchableOpacity>
                        <View style={{flexDirection:"row",marginLeft:10}}>
                        {/*Left bar*/}
                     <View style={styles.bar}></View>
                     {/* Right Bar */}
                     <View style={styles.bar}></View>
                     </View>
                     </TouchableOpacity>
                    </View>
                    </View>
                  
                   </View>
        <View style={styles.container}> 
        <View>
        <TouchableOpacity>
        <Homeicon style={{marginLeft:30,}}></Homeicon>
        <Text style={{color:"#777777",marginLeft:20}}>Home</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
        <Searchiconf style={{marginLeft:100,}}></Searchiconf>
        <Text style={{color:"white",marginLeft:92}}>Search</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
        <Libraryicon style={{marginLeft:100,}}></Libraryicon>
        <Text style={{color:"#777777",marginLeft:80}}>Your Library</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    )
};
const styles=StyleSheet.create({
    playbox:{
        backgroundColor:"#0F1929",
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
      },
      container:{
        backgroundColor:"black",
        flexDirection:"row",
        height:60,
        alignItems:"center",
     }
})
export default Searchall;