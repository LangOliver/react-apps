import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, ButtonGroup, Grid} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CalcForm from './components/CalcForm';


function App() {

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


  return (
    <CalcForm/>
  );
}

export default App;

