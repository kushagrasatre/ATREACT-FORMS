import { BULB_OFF, BULB_ON } from "./SwitchType"

export const bulbOnCreator=()=>{
    return  {
        type:BULB_ON
    }
}

export const bulbOffCreator=()=>{
    return  {
        type:BULB_OFF
    }
}

