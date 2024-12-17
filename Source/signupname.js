import Signupcomponent from "../Components/signupcomponent";
import Tick from "../assets/spotify/icon/tick_icon.svg";
import React from "react";
import { Text,View,StyleSheet } from "react-native";
const Name=()=>{
    return(
        <Signupcomponent text="What's your name ?" must="This appears on your spotify profile" icon={<Tick/>} showButton={false} showcomponent={true}></Signupcomponent>
    )
};
export  default Name;