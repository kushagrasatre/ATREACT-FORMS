import react, { useState } from "react"
import bulb_off from '../BulbImages/bulb-off.png';
import bulb_on from '../BulbImages/bulb-on.png';

const ControlledInputTypeButton = () => {
    const [bulbState,setBulbState]=useState(false);
    const bulbStateHandler=()=>{
        setBulbState(!bulbState);
    }

    return (<div className="bulbContainer">
        <img src={bulbState==false?bulb_off:bulb_on}/>
        <input className="buttonStyle" type="button" onClick={bulbStateHandler} value={bulbState==false?"On":"Off"}/>
    </div>)
}

export default ControlledInputTypeButton;