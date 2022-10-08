import { BULB_OFF, BULB_ON } from "./SwitchType";

const SwitchReducer = (state, action) => {
    console.log(action,"action")
    switch (action.type) {
        case BULB_ON:
        return {...state,bulbState:"ON"}
            break;
        case BULB_OFF:
            return {...state,bulbState:"OFF"}
            break;
        default:
            return {...state}
            break;
    }
}

export default SwitchReducer;