import { Text,View,StyleSheet,TextInput,Image } from "react-native";
import Homeicon from "../assets/spotify/icon/Home_icon_filled.svg"
import Searchicon from "../assets/spotify/icon/Search-icon.svg"
import Libraryicon from "../assets/spotify/icon/Library-small.svg"
import { TouchableOpacity } from "react-native";
const Footer=( props )=>{
    return(
        <View style={styles.container}> 
        <View>
        <TouchableOpacity>
        <Homeicon style={{marginLeft:30,}} fill={props.homeicon || "white"}></Homeicon>
        <Text style={{color:"white",marginLeft:20}}>Home</Text>
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
        <Text style={{color:"#777777",marginLeft:80}}>Your Library</Text>
        </TouchableOpacity>
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