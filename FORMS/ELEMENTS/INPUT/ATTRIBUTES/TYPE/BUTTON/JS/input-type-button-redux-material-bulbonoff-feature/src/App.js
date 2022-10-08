import { Box } from '@mui/material';
import './App.css';
import BulbComponent from './Components/BulbComponent';
import ButtonComponent from './Components/ButtonComponent';
import { store } from './Redux/SwitchStore';
import { Provider } from 'react-redux'
import ReduxContainerComponent from './Components/ReduxContainerComponent';


function App() {

  return (
    <Provider store={store}>
      <Box className="App" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <BulbComponent />
        <ButtonComponent />
        <ReduxContainerComponent />
      </Box>
    </Provider >
  );
}

export default App;
