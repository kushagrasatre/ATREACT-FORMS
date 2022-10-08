import { Button } from "@mui/material";
import { bulbOffCreator, bulbOnCreator } from "../Redux/SwticheAction";
import {connect} from "react-redux"
const ButtonComponent = (props) => {
    const SwitchLightHandler = () => {
        if(props.bulbState=="OFF"){
            props.bulbOnMethod()
        }
        else{
            props.bulbOffMethod()
        }
    }
    return <Button variant="contained" onClick={SwitchLightHandler}>ButtonState</Button>
}

const mapStateToProp=(state)=>{
    return {
        bulbState:state.bulbState
    }
}

const mapDispatchToProp=(dispatch)=>{
    return {
        bulbOnMethod:()=>{
            dispatch(bulbOnCreator())
        },
        bulbOffMethod:()=>{
            dispatch(bulbOffCreator())
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(ButtonComponent);