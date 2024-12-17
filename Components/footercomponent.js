import { Text,View,StyleSheet,TextInput,Image } from "react-native";
import Homeicon from "../assets/spotify/icon/Home_icon_filled.svg"
import Searchicon from "../assets/spotify/icon/Search_icon.svg"
import Libraryicon from "../assets/spotify/icon/Library-small.svg"
const Footer=()=>{
    return(
        <View style={styles.container}> 
        <View>
        <Homeicon style={{marginLeft:30,}}></Homeicon>
        <Text style={{color:"white",marginLeft:20}}>Home</Text>
        </View>
        <View>
        <Searchicon style={{marginLeft:100,}}></Searchicon>
        <Text style={{color:"#777777",marginLeft:92}}>Search</Text>
        </View>
        <View>
        <Libraryicon style={{marginLeft:100,}}></Libraryicon>
        <Text style={{color:"#777777",marginLeft:80}}>Your Library</Text>
        </View>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
       backgroundColor:"black",
       flexDirection:"row",
       height:60,
       alignItems:"center",
       
    }
});
export default Footer;