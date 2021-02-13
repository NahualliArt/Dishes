import logo from './assets/logo.svg';

import Header from "./components/header";
import NewDish from "./components/newDish";
// import Dish, {Flag} from "./components/dish";
import Dish from "./components/dish";
import './styles/App.css';
import { Component } from 'react';

function App() {
  let dish = "tacos";
  let dishes = ["Tacos", "Ceviche", "Paella"];
   return (
     <div className="App">
       <Header/>
       <NewDish />
       <Dish name={dish} qty="4"/>
     </div>
   );
}

export default App;
