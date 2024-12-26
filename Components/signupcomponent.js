import React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Backicon from "../assets/spotify/icon/ChevronLeft.svg";
import Tick from "../assets/spotify/icon/tick_icon.svg";

const Signupcomponent = (props) => {
    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
            <View style={{ flexDirection: "row", marginTop: 40, marginLeft: 13 }}>
                <TouchableOpacity onPress={props.pressback}>
                    <Backicon style={styles.svg} />
                </TouchableOpacity>
                <Text style={{ color: "white", marginLeft: 90, marginTop: 5, fontWeight: "bold", fontSize: 16 }}>
                    Create account
                </Text>
            </View>
            <Text style={styles.emailtext}>{props.text}</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={{
                        backgroundColor: "#777777",
                        height: 45,
                        width: 310,
                        marginLeft: 25,
                        borderRadius: 5,
                        color: "white",
                        fontSize: 17,
                    }}
                    value={props.value}
                    onChangeText={props.changetext}
                />
                {props.icon && <View style={styles.tick}>{props.icon}</View>}
            </View>
            <Text style={{ color: "white", marginLeft: 25, fontSize: 10, marginTop: 5 }}>{props.must}</Text>

            {/* Display error message */}
            {props.error && (
                <Text style={{ color: "red", marginLeft: 25, fontSize: 12, marginTop: 10 }}>
                    {props.error}
                </Text>
            )}

            {props.showButton && (
                <TouchableOpacity
                    style={{
                        backgroundColor: "#777777",
                        width: 100,
                        height: 40,
                        borderRadius: 40,
                        marginLeft: 130,
                        paddingLeft: 35,
                        paddingTop: 8,
                        marginTop: 30,
                    }}
                    onPress={props.press}
                    
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            )}

            {props.showcomponent && (
                <View>
                    <View style={styles.hr}></View>
                    <Text style={{ color: "white", marginTop: 20, marginLeft: 20, fontSize: 9 }}>
                        By tapping on "Create account", you agree to the Spotify terms of use.
                    </Text>
                    <Text style={{ color: "lightgreen", marginTop: 10, marginLeft: 20, fontSize: 9 }}>
                        Terms of Use
                    </Text>
                    <Text style={{ color: "white", marginTop: 10, marginLeft: 20, fontSize: 9 }}>
                        To learn more about how Spotify collects, uses, shares, and protects your personal data, please see the Spotify Privacy Policy.
                    </Text>
                    <Text style={{ color: "lightgreen", marginTop: 10, marginLeft: 20, fontSize: 9 }}>
                        Privacy Policy
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "white", marginTop: 10, marginLeft: 20, fontSize: 9 }}>
                            Please send me news and offers from Spotify
                        </Text>
                        <View
                            style={{
                                borderRadius: 100,
                                borderColor: "#777777",
                                borderWidth: 1,
                                width: 19,
                                height: 19,
                                marginLeft: 128,
                                marginTop: 9,
                            }}
                        ></View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "white", marginTop: 10, marginLeft: 20, fontSize: 9, width: 220 }}>
                            Share my registration data with Spotify's content providers for marketing purposes.
                        </Text>
                        <View
                            style={{
                                borderRadius: 100,
                                borderColor: "#777777",
                                borderWidth: 1,
                                width: 19,
                                height: 19,
                                marginLeft: 90,
                                marginTop: 17,
                            }}
                        ></View>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            width: 150,
                            height: 35,
                            borderRadius: 15,
                            marginTop: 310,
                            marginLeft: 100,
                        }}
                    >
                        <Text style={{ fontWeight: "bold", marginLeft: 20, marginTop: 6 }} onPress={props.enter}>
                            Create an account
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputbox: {
        backgroundColor: "#777777",
        height: 45,
        width: 310,
        marginLeft: 25,
        flexDirection: "row",
        borderRadius: 5,
    },
    emailtext: {
        color: "white",
        marginTop: 40,
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 25,
    },
    tick: {
        marginLeft: 260,
        marginTop: 15,
    },
    hr: {
        borderBottomWidth: 2,
        borderBottomColor: "#777777",
        marginTop: 25,
        width: 300,
        marginLeft: 20,
    },
});

export default Signupcomponent;
