// USEEFFECT FOR SIDE EFFECT AND USESTATE HOOKS FOR STATE MANAGEMENT
import { useEffect, useState } from "react";
//CSS MODULE METHOD FOR APPLYING CSS
import styles from "./CSS/TextField.module.css"
const TextField = (props) => {
    // console.log("TEXTFIELD COMPONENT");
    //HOOKS FOR UPDATING THE TEXT VALUE ON ONCHANGE EVENT
    const [textValue, setValue] = useState("");
    //USEEFFECT WILL RUN WHEN textValue WILL BE CHANGE
    useEffect(()=>{
        //THIS EVENT HANLDER IS COMMING FROM ROOT APP (APP) AND EVENT TRIGGER EVERYTIME WHEN textValue WILL BE CHANGE EVERYTIME
        props.handleChange(textValue)
    },[textValue])
    //PARENTHESIS FOR MULTILINE JSX SUPPORT
    return (
        //REACT FRAGMENT FOR AS PER REACT RULE EVERY TIME WE HAVE TO RETURN ONLY ONE ELMENT
        <>
{/* NORMAL INPUT FIELD WITH CONTROLLED COMPONENT FEATURE(BIND ONCHANGE EVENT AND TAKING AND UPDATATING VALUE FROM RACT HOOKS  ) */}
            <input type="text" placeholder="Search Name" value={textValue} className={styles.textField} onChange={(e) => {
                setValue(e.target.value);
            }} />
        </>
    )
}

export default TextField;