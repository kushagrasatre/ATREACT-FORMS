import { useContext } from "react";
import { BulbStateContext } from "../App";
import Button from "./Styled/Button"

const ButtonComponent=(props)=>{

    const bulbContent=useContext(BulbStateContext);
    
    const SwitchLightHandler = () => {
        if(bulbContent.getBulbState.bulbState=="OFF"){
            bulbContent.setBulbState({...bulbContent.getBulbState,bulbState:"ON"})
        }
        else{
            bulbContent.setBulbState({...bulbContent.getBulbState,bulbState:"OFF"})
        }
    }
    return <Button onClick={SwitchLightHandler}>{props.children}</Button>
}
export default ButtonComponent;