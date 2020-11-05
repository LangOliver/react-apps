import { Button, IconButton, ButtonGroup, Grid, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Icon, InlineIcon } from '@iconify/react';
import calculatorIcon from '@iconify-icons/mdi/calculator';

const Buttons = () => {
    var myButtons =[]

    function makeButton(value) {
        return <Button onClick={handleInputChange} value={value}>{value}</Button>
    }

    function createButtonGrid() {
        for (let i=0; i<9; i++) {
            myButtons.push(makeButton(i))
        }
    }
    return (
        <div>{myButtons}</div>
    )
}

export default Buttons;