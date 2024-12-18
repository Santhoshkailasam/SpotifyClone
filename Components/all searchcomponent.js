import React from "react";
import { Text,View } from "react-native";
const AllsearchComponent = ({color,text,text1,showheader,Top})=>{
    return(
        <View>
        <View>
        {showheader&&<Text style={{marginTop:20,marginLeft:10,color:"white",fontWeight:"bold",fontSize:14,position:"absolute",width:300}}>{text}</Text>}
        </View>
        <View>
        <View style={{backgroundColor:color,marginTop:Top,marginLeft:10,height:100,width:165,overflow:"hidden",borderRadius:5}}>
            <Text style={{marginTop:15,marginLeft:10,color:"white",fontWeight:"bold",fontSize:18,width:80,position:"absolute"}}>{text1}</Text>
            <View style={{backgroundColor:"black",width:60,height:60,marginTop:38,marginLeft:114,transform:[{rotate:"20deg"}]}}>
                <Text style={{color:"white",marginTop:20,marginLeft:7,fontWeight:"bold"}}>Album</Text>
            </View>
        </View>
        </View>
        </View>
    )
};
export default AllsearchComponent;