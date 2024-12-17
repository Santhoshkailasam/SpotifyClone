import Signupcomponent from "../Components/signupcomponent";
const Password=()=>{
    return(
        <Signupcomponent text="Create a Password" must="Use atleast 8 characters" showButton={true}></Signupcomponent>
    )
}
export default Password;