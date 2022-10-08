import { createContext, useState } from 'react';
import './App.css';
import HooksContainerComponent from './Components/AppStateThroughHooks';
import BulbComponent from './Components/BulbComponent';
import ButtonComponent from './Components/ButtonComponent';
import Button from './Components/Styled/Button';

const intialBulbState={bulbState:"OFF"}
export const BulbStateContext=createContext();
function App() {
  const [getBulbState,setBulbState]=useState(intialBulbState);
  return (
    <div className="BulbSwtichContainer">
      <BulbStateContext.Provider value={{ getBulbState,setBulbState}} >
     <BulbComponent/>
     <ButtonComponent>Button State</ButtonComponent>
     <HooksContainerComponent></HooksContainerComponent>
     </BulbStateContext.Provider>
    </div>
  );
}

export default App;
