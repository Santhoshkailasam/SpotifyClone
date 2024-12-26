import Signupcomponent from "../Components/signupcomponent";
import { ReactComponent as Tick } from "../assets/spotify/icon/tick_icon.svg"; // Import as a React component
import { useState } from "react";
import { useUser } from "./Usercontext";
import { useNavigation } from "@react-navigation/native";

const Gender = () => {
    const navigation = useNavigation();
    const { userData, setUserData } = useUser(); // Get user data and setter from context
    const [gender, setGender] = useState(userData.Gender || ""); // Initialize state with gender from context or empty
  
    const Genderupdate = (newGender) => {
        setGender(newGender); // Update gender state
    };

    const gotonextscreen = () => {
        setUserData({ ...userData, Gender: gender }); // Set the updated gender in context
        navigation.navigate("Name"); // Navigate to the next screen
    };

    const backscren = () => {
        navigation.navigate("Password"); // Navigate back to Password screen
    };

    return (
        <Signupcomponent
            text="What's your gender?"
            showButton={true}
            value={gender} // Pass gender state here
            changetext={Genderupdate}
            press={gotonextscreen}
            pressback={backscren}
        />
    );
};
export default Gender;
