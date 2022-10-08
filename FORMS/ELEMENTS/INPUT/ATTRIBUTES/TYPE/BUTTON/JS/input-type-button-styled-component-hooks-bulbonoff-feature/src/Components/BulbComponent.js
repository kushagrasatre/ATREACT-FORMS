import BulbOnImage from "../BulbImages/bulb-on.png"
import BulbOffImage from "../BulbImages/bulb-off.png"
import { useContext } from "react"
import { BulbStateContext } from "../App"
const BulbComponent = () => {
    const bulbContent=useContext(BulbStateContext);
    return <img src={bulbContent.getBulbState.bulbState=="OFF" ?BulbOffImage:BulbOnImage} alt="bulbState" />
}



export default BulbComponent;