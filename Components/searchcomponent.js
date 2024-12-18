import React from "react";
import { Text,View,StyleSheet,TextInput} from "react-native";
import Search from "../assets/spotify/icon/Search-icon.svg";
const Searchcomponent=()=>{
    return(
        <View style={styles.searchbox}>
        <Search style={{marginTop:10,marginLeft:10}}></Search> 
            <TextInput style={styles.textbox} placeholder="Search" placeholderTextColor={"black"}></TextInput>
        </View>
    )
};
const styles=StyleSheet.create({
    searchbox:{
        backgroundColor:"white",
        width:300,
        marginLeft:20,
        marginTop:15,
        borderRadius:5,
        height:40,
        flexDirection:"row"
    },
    textbox:{
        backgroundColor:"white",
        width:300,
        borderRadius:5,
        height:40,
        paddingLeft:20,
    },
});
export default Searchcomponent;