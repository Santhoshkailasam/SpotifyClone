import Signupcomponent from "../Components/signupcomponent";
import Tick from "../assets/spotify/icon/tick_icon.svg";
import React from "react";
import { useUser } from "./Usercontext";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Firebase Authentication
import { auth } from "../service/firebaseAuth"; // Adjust this import based on your Firebase setup

const Name = () => {
    const navigation = useNavigation();
    const { userData, setUserData } = useUser(); // Access user data and updater from context
    const [error, setError] = React.useState(""); // For handling errors

    // Name input update handler
    const Nameupdate = (newName) => {
        setUserData({ ...userData, name: newName }); // Update the name in context
    };

    // Sign-up handler function (called when Create Account is pressed)
    const handler = async () => {
        setError(""); // Reset the error message

        const { email, password, name } = userData; // Extract data from context
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(userData)

        try {
            // Proceed with Firebase user creation
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Update user profile with the display name
            await updateProfile(userCredential.user, { displayName: name });

            console.log("User created successfully:", userCredential.user);

            // Navigate to the Home screen
            navigation.navigate("Home");
        } catch (error) {
            console.error("Error creating user:", error);
            setError(error.message); // Show the Firebase error message
        }
    };

    return (
        <Signupcomponent
            text="What's your name?"
            must="This appears on your Spotify profile"
            icon={<Tick />}
            showButton={false} // Show the Create Account button
            showcomponent={true}
            value={userData.name} // Bind input to `name` from context
            changetext={Nameupdate} // Update `name` in context
            enter={handler} // Trigger handler when Create Account is pressed
            pressback={() => navigation.goBack()} // Handle back navigation
            error={error} // Show any error messages (optional)
        />
    );
};

export default Name;
