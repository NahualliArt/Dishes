import React, { Component, Fragment } from 'react';
// Fragment para no estar creando <div></div> innecesarios en todos lados

import Button from '@material-ui/core/Button';

export class Flag extends Component {
    render(){
        return(
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }
}


// CODIGO NATIVO DE REACT
// export class Ingredient extends Component{
//     render(){
//      return React.createElement('h1', {}, "Ingrediente");
//     }
// }

export class Ingredient extends Component{
    render(){
        return(
            <Fragment>
                <h4>Ingredientes</h4>
            </Fragment>
        )
    }
}


class Dish extends Component{
    ingredients = ["Tortilla", "Carne", "Cebolla"];
    //metodo para contar 
    countIngredients(){
        return this.ingredients.length;
    }
    render(){
        return(
            <div className="dish">
                {/* <h1>Platillo</h1> */}
                <h1>{ this.props.name }</h1> 
                <h3>{this.countIngredients()} Ingredientes</h3>
                <ul>
                    {/* Cada que se utilice un iterador, se debe usar una KEY con un valor unico */}
                    {this.ingredients.map( (ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                {/* Gracias a la etiqueta Fragment ya no hay división adicional */}
                <Button variant="contained" color="primary">
                    Elegir
                </Button>
            </div>
        )
    }
}

export default Dish;