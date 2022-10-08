import { connect } from "react-redux";
import BulbOnImage from "../BulbImages/bulb-on.png"
import BulbOffImage from "../BulbImages/bulb-off.png"
const BulbComponent = (props) => {
    console.log(props.bulbState, "state")
    return <img src={props.bulbState=="ON" ?BulbOffImage: BulbOnImage} alt="bulbState" />
}

const mapStateToProp = (state) => {
    return {
        bulbState: state.bulbState
    }
}


export default connect(mapStateToProp)(BulbComponent);