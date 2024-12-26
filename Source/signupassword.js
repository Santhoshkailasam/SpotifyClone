import Signupcomponent from "../Components/signupcomponent";
import { useState } from "react";
import { useUser } from "./Usercontext";
import { useNavigation } from "@react-navigation/native";

const Password = () => {
    const navigation = useNavigation();  // Initialize navigation hook
    const { userData, setUserData } = useUser();  // Get userData and setUserData from context
    const [password, setPassword] = useState(userData.Password || "");  // Local state for password

    const Passwordupdate = (newPassword) => {
        setPassword(newPassword);  // Update local password state
    };

    const gotonextscreen = () => {
        setUserData({ ...userData, Password: password });  // Save password in the global context
        navigation.navigate("Gender");  // Navigate to Gender screen
        console.log(password)
    };

    const backscren = () => {
        navigation.navigate("Email");  // Go back to Signup screen
    };

    return (
        <Signupcomponent
            text="Create a Password"
            must="Use at least 8 characters"
            showButton={true}
            value={password}  // Bind to local password state
            changetext={Passwordupdate}  // Update local password state
            press={gotonextscreen}  // Proceed to the next screen
            pressback={backscren}  // Go back to the previous screen
        />
    );
};

export default Password;
