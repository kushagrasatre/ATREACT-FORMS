import {createStore} from "redux"
import SwitchReducer from "./SwitchReducer";
const intialBulbState={bulbState:"OFF"}
export const store=createStore(SwitchReducer,intialBulbState);
