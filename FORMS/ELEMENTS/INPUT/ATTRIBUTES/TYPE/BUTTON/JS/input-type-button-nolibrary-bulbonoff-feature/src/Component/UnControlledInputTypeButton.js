import react, { useEffect, useRef, useState } from "react"
import bulb_off from '../BulbImages/bulb-off.png';
import bulb_on from '../BulbImages/bulb-on.png';

const UnControlledInputTypeButton = () => {
    const [bulbState,setBulbState]=useState(false);
    const inputRef=useRef("")
    const bulbStateHandler=()=>{
        console.log(inputRef.current.value)
        setBulbState(!bulbState);
    }
    useEffect(()=>{
        inputRef.current.value=bulbState==false?"on":"off";
    },[bulbState])

    return (<div className="bulbContainer">
        <input className="buttonStyle" ref={inputRef} type="button" onClick={bulbStateHandler} />
        <img src={bulbState==false?bulb_off:bulb_on}/>
    </div>)
}

export default UnControlledInputTypeButton;