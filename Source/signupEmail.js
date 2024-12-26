import Signupcomponent from "../Components/signupcomponent";
import { useState } from "react";
import { useUser } from "./Usercontext";
import { useNavigation } from "@react-navigation/native";

const Email = () => {
  const navigation = useNavigation();
  const { userData, setUserData } = useUser(); // Get user data and setter from context
  const [email, setEmail] = useState(userData.Email || ""); // Initialize state with email from context or empty

  const Emailupdate = (newEmail) => {
    setEmail(newEmail); // Update local state
  };

  const gotonextscreen = () => {
    // Save email to the context before moving to the next screen
    setUserData({ ...userData, Email: email });
    navigation.navigate("Password"); // Navigate to Password screen
    console.log(email)
  };

  const backscren = () => {
    navigation.navigate("Login"); // Go back to Login screen
  };

  return (
    <Signupcomponent
      text="What's your Email?"
      must="You'll need to confirm this email later."
      showButton={true}
      value={email} // Bind to the local email state
      changetext={Emailupdate} // Update local email state
      press={gotonextscreen} // Proceed to Password screen
      pressback={backscren} // Go back to Login screen
    />
  );
};

export default Email;
