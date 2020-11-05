import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';

import { Button, IconButton, ButtonGroup, Grid, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Icon, InlineIcon } from '@iconify/react';
import calculatorIcon from '@iconify-icons/mdi/calculator';


 const CalcForm = () => {
    const [calcExpression, setCalcExpression] = useState("")
    var myButtons =[0,1,2,3,4,5,6,7,8,9]

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  

  function handleInputChange(e) {
      e.preventDefault();
    console.log('Button was clicked: ', e.currentTarget.value)
    if (e.currentTarget.value === "=") {
        console.log("Result is: ", eval(calcExpression))
        setCalcExpression(eval(calcExpression))

    }
    else {
        setCalcExpression(calcExpression + e.currentTarget.value)

    }

  }

  return (
    
    <div className={classes.root}>
        <Grid container xs={9} spacing="1">
            <Grid item xs={9}>
                    <TextField disabled  id="result" variant="outlined" value={calcExpression} />
            </Grid>
            <Grid item xs={9}>
                <ButtonGroup size="small" color="primary" aria-label="text primary button group">
                    {
                        myButtons.map((value) => {
                            return (<Button key={value} onClick={handleInputChange} value={value}>{value}</Button>)
                            })
                    }
                </ButtonGroup>   
            </Grid>
            <Grid item xs={5}>
                <ButtonGroup size="small" color="primary" aria-label="text primary button group">
                <Button onClick={handleInputChange} value="+">         
                    <AddIcon color="primary"/>
                    </Button>
                    <Button onClick={handleInputChange} value="-">         
                    <RemoveIcon color="primary"/>
                    </Button>
                    <Button onClick={handleInputChange} value="=" >         
                    <Icon icon={calculatorIcon}/>
                    </Button>
                </ButtonGroup>
            </Grid>
      </Grid>
          
     

      </div>
  )
}

export default CalcForm
