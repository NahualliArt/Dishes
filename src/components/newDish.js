import React, {Component} from 'react';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"
import { UndoOutlined } from '@material-ui/icons';

class NewDish extends Component{

    // Agarrar valores que entrar a TextField de Material-UI

    newDish = React.createRef();


    // que todos los metodos dentro de la clase se puedan comunicar facilmente entre si
    // opcion 1:
    // constructor(){
    //     super();
    //     this.addDish = this.addDish.bind(this);
    //     // de haber más metodos, se tendría que hacer una línea por cada uno y eso es feo
    // }

    // opcion 2: la más eficiente hacer una funcion con :: Metodo = event => {}
    addDish = event =>{
        console.log('Agregar platillo');
        // evitar que todo se recargue y no se pierda informacion
        event.preventDefault();
        console.log(this.newDish.value);
    }

    render(){
        console.log(this);
        return(
            <form autoComplete="off" onSubmit={this.addDish}>
                <TextField 
                    label="Platillo..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={e => (this.newDish = e)}
                />
                <Fab color="primary" size="medium" 
                className="dish-form-icon" onClick={this.addDish}>
                    <AddIcon />
                </Fab>
            </form>
        )
    }
}

export default NewDish;