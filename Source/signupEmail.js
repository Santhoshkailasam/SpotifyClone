import Signupcomponent from "./signupcomponent";
const Email =(text)=>{
    return(
        <Signupcomponent text="What's your Email?" must="You'll need to confirm this email later." showButton={true}></Signupcomponent>
    )
}
export default Email;