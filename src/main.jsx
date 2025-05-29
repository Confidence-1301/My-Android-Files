import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.jsx'
import MyTechList from './Assignment2.jsx'
import DataPropsCars from './DataPropsCar.jsx'
import MyNames from './Tables.jsx'
import DataPropsArray from './DataPropsArray.jsx'
import PassObjectProps from './Objects.jsx'
import ObjectProperties from './ObjectProps.jsx'
import PassProgrammingProps from './Objects1.jsx'
import PasseProgrammingProps from './BMI.jsx'
import EventHandler from './EventHandler.jsx'
import CompoundInterestAPI from './CompoundInterestAPI.jsx'
import ThemeStyling from './ThemeStyling.jsx'
import ThemeStyling1 from './ThemeStyling1.jsx';
import ThemeStyling2 from './ThemeStyling2.jsx';
import Card from './Card';
import ObjectTesting from './ObjectTesting.jsx';
import Simple_Interest from './Simple_Interest.jsx';
import VariableObjectMap1 from './VariableObjectMap1.jsx';
import NavbarBootstrap from './NavbarBootstrap.jsx';
import VariableObjectMap2 from './VariableObjectMap2.jsx';
import MyForm from './Forms.jsx';
import MyFormData from './Form1.jsx';
import TicTacToe from './Tic.jsx';
import Game_v1 from './Game.jsx';
import Game_v2 from './Game2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* {<MyTechList />} */}
    {/* {<DataPropsCars />} */}
    {/* {<MyNames/>} */}
    {/* {<DataPropsArray />} */}
    {/* {<PassObjectProps/>} */}
    {/* {<ObjectProperties/>} */}
    {/* {<PassProgrammingProps/>} */}
    {/* {<PasseProgrammingProps/>} */}
    {/* {<EventHandler/>} */}
    {/* {<CompoundInterestAPI/>} */}
    {/* {<ThemeStyling/>} */}
    {/* {<ThemeStyling1/>} */}
    {/* {<ThemeStyling2/>} */}
    {/* {<Card/>} */}
    {/* {<ObjectTesting/>} */}
    {/* {<Simple_Interest/>} */}
    {/* {<VariableObjectMap1/>} */}
    {/* {<NavbarBootstrap/>} */}
    {/* {<VariableObjectMap2/>} */}
    {/* {<MyForm/>} */}
    {/* {<MyFormData/>} */}
    {/* {<TicTacToe/>} */}
    {/* {<Game_v1/>} */}
    {<Game_v2/>}

  </StrictMode>,
)
