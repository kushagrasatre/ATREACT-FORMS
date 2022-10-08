import { useContext } from "react";
import { BulbStateContext } from "../App";

const HooksContainerComponent = () => {
    const bulbContent=useContext(BulbStateContext);
    return (<div style={{textAlign:"center"}}>
        <h3>Hooks State</h3>
        <h4>{JSON.stringify(bulbContent.getBulbState)}</h4>
    </div>)
}

export default HooksContainerComponent;