import './App.css';
import TextField from "./Components/TextField";
import DataList from './Components/DataList';
import useDataFetch from './Components/DataFetch';
import { useState } from 'react';
function App() {
  // URL FOR GETTING DATA
  const URL="http://localhost:3000/profile";
  //CUSTOM HOOKS FOR RETRIVING DATA
  const customDataHooks=useDataFetch({URL});
  //HOOKS FOR QUERY STRING(WHEN YOU TYPE SOME THING IN INPUT FIELD SO IT WILL queryText varriable will update)
  const [queryText,setQueryTex]=useState();
  //EVENT HANLDER FOR ON CHANGE EVENT ON INPUT TEXT FILED
  const handleChange=(value)=>{
    //UPDATE THE QUERY STRING
    setQueryTex(value)
  }
  //IF CUSTOMDATA WILL BE UNDEFINED OR NULL SO IT WILL NOT RENDER ANTHING
  if(!customDataHooks){
    return false;
  }
  return (
    <div className="data-search-container">
      {/* TEXT FIELD COMPONENT */}
      <TextField handleChange={handleChange}/>
      {/* DATA LIST COMPONENT */}
      <DataList queryText={queryText} userData={customDataHooks}/>
    </div>
  );
}

export default App;
