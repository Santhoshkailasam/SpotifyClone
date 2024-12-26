import { Text,View,StyleSheet,TextInput,Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
const Artistimage=(props)=>{ 
    const [selectedImages, setSelectedImages] = useState({
        image1: false,
        image2: false,
        image3: false,
      });
    
      // Toggle selection for an image
      const toggleSelection = (imageKey) => {
        if (props.isSelectable) {
        setSelectedImages((prev) => ({
          ...prev,
          [imageKey]: !prev[imageKey],
        })); 
    }
}

    const stylesBasedOnValueImage = props.valueImage==1
    ?{height:90,width:90}
    :{height:100,width:100};
    const stylesBasedOnValueText= props.valueText ==0
    ?{fontSize:12,marginLeft:29}
    :{fontsize:25}
    return(
        <View> 
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>toggleSelection("image1")}>
        <Image  source={props.image1} style={[styles.image,stylesBasedOnValueImage]}></Image>
        {selectedImages.image1 && (
            <View style={styles.overlay}>
              <MaterialIcons name="check-circle" size={30} color="white" />
            </View>
        )}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>toggleSelection("image2")}>
        <Image  source={props.image2} style={[styles.image,stylesBasedOnValueImage]}></Image>
        {selectedImages.image2 && (
            <View style={styles.overlay}>
              <MaterialIcons name="check-circle" size={30} color="white" />
            </View>
        )}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>toggleSelection("image3")}>
        <Image source={props.image3} style={[styles.image,stylesBasedOnValueImage]}></Image>
        {selectedImages.image3 && (
            <View style={styles.overlay}>
              <MaterialIcons name="check-circle" size={30} color="white" />
            </View>
        )}
        </TouchableOpacity>
        </View>
        <View  style={{flexDirection:"row"}}>
        <Text style={[{color:"white",fontSize:14,marginLeft:25},stylesBasedOnValueText]}>{props.text1}</Text>
        <Text style={[{color:"white",fontSize:14,marginLeft:50},stylesBasedOnValueText]}>{props.text2}</Text>
        <Text style={[{color:"white",fontSize:14,marginLeft:40},stylesBasedOnValueText]}>{props.text3}</Text>
        </View>
        </View>
    
)};
const styles=StyleSheet.create({
    image:{
        width:105,
        height:105,
        marginLeft:13,
        marginTop:26
    },
    text:{
        color:"white",
        marginLeft:28,
        fontSize:14

    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10, // Match border radius with the image
      },
})
export default Artistimage;