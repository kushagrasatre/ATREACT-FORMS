import './App.css';
import TextFieldComponent from './Components/TextFieldComponent';
import AlignItemsList from './Components/DataList';
import { Box } from '@mui/system';
import { useState } from 'react';
import useCustomDataHook from './Components/CustomDataHook';

function App() {
  const [queryText, setQueryText] = useState({searchField:""});
  const queryTextMethod = (onChangeText) => {
    setQueryText(onChangeText)
  }
  const URL = "http://localhost:3000/products";
  const [productData, productSetData] = useCustomDataHook(URL);
  if (!productData) {
    return false;
  }
  return (
    <Box className="App">
      <TextFieldComponent queryTextMethod={queryTextMethod} />
      <AlignItemsList queryText={queryText} products={productData} />
    </Box>
  );
}

export default App;
