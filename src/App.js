import logo from './assets/logo.svg';

import Header from "./components/header";
// import Dish, {Flag} from "./components/dish";
import Dish, * as D from "./components/dish";

import './styles/App.css';
import { Component } from 'react';



function App() {
  let dish = "tacos";
  let dishes = ["Tacos", "Ceviche", "Paella"];
   return (
     <div className="App">
       <Header/>
       <Dish name={dish} qty="4"/>
       Yo como { dish }
       <ul>
         {dishes.map(dish=><li>{dish}</li>)}
       </ul>
       <D.Flag/>
     </div>
   );
}

export default App;
