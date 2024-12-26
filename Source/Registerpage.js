import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../service/firebaseAuth";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");
    const navigation = useNavigation();
    const isInputFilled = Email.length > 0 && Password.length > 0;

    const Handler = () => {
        setError("");
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("chooseartist");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    const loginPage = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
            <View style={{ marginTop: 60 }}>
                <Text style={styles.text}>Email or Username</Text>
                <TextInput
                    onChangeText={setEmail}
                    style={styles.inputBox}
                    placeholder="Enter Email"
                    placeholderTextColor="#a9a9a9"
                />
                <Text style={[styles.text, { marginTop: 40 }]}>Password</Text>
                <TextInput
                    onChangeText={setPassword}
                    style={styles.inputBox}
                    secureTextEntry
                    placeholder="Enter Password"
                    placeholderTextColor="#a9a9a9"
                />
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity
                        style={[
                            styles.btn,
                            { backgroundColor: isInputFilled ? "white" : "#877e7e" },
                        ]}
                        onPress={Handler}
                        disabled={!isInputFilled}
                    >
                        <Text style={{ fontSize: 20, marginTop: 10 }}>Sign up for free</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={{
                            borderColor: "#877e7e",
                            borderWidth: 1,
                            width: 200,
                            marginTop: 30,
                            borderRadius: 30,
                            height: 25,
                            justifyContent: "center",
                        }}
                        onPress={loginPage}
                    >
                        <Text style={{ color: "white", textAlign: "center" }}>
                            Already have an Account
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10, marginTop: 10 }}>
                    {Error && <Text style={{ color: "red" }}>{Error}</Text>}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 30,
        marginLeft: 10,
        fontWeight: "bold",
    },
    inputBox: {
        backgroundColor: "#706968",
        marginLeft: 10,
        height: 50,
        width: 330,
        borderRadius: 5,
        color: "white",
        fontSize: 17,
        paddingLeft: 10,
    },
    btn: {
        marginTop: 40,
        alignItems: "center",
        width: 200,
        height: 50,
        borderRadius: 40,
    },
});

export default RegisterScreen;
