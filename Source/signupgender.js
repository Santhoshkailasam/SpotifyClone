import Signupcomponent from "./signupcomponent";
import Tick from "../assets/spotify/icon/tick_icon.svg";
const Gender = ()=>{
    return(
        <Signupcomponent text="What's your gender?"  icon={<Tick />} showButton={true}></Signupcomponent>

    )
}
export default Gender;