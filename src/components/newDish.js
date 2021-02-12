import React, {Component, Fragment} from 'react';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"

class NewDish extends Component{
    render(){
        return(
            <form autoComplete="off">
                <TextField 
                    label="Platillo..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                />
                <Fab color="primary" size="medium" 
                class="dish-form-icon">
                    <AddIcon />
                </Fab>
            </form>
        )
    }
}

export default NewDish;