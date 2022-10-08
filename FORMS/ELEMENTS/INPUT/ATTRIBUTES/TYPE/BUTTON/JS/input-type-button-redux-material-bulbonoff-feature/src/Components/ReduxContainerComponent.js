import { Box } from "@mui/system"
import { connect } from "react-redux"
const ReduxContainerComponent = (props) => {
    return (<Box sx={{textAlign:"center"}}>
        <h3>Redux State</h3>
        <h4>{JSON.stringify(props.bulbState)}</h4>
    </Box>)
}

const mapStateToProp = (state) => {
    return {
        bulbState: state
    }
}
export default connect(mapStateToProp)(ReduxContainerComponent);