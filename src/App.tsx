import React from 'react';
import { 
  Container, 
  FormControl, 
  Grid, 
  InputLabel, 
  MenuItem, 
  Paper, 
  Select, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField,
  Typography} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    currencyInputBox: {
      marginBottom: 20,
      marginTop: 20,
    },
    currencyInput: {
      minWidth: 'calc(70% - 10px)',
      marginRight: 10,
    },
    currencyType: {
      minWidth: '30%',
    },
    table: {
      minWidth: 650,
    },
  }),
);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={3}>
        <Grid item xs={8}>
          
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} >
            <div className={classes.currencyInputBox} >
              <FormControl className={classes.currencyInput}>
            <TextField   label="Сумма" />
              </FormControl>
            <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
               Валюта
            </InputLabel>
            <Select
            value={10}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            </div>
            <div className={classes.currencyInputBox} >
              <FormControl className={classes.currencyInput}>
            <TextField   label="Сумма" />
              </FormControl>
            <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
               Валюта
            </InputLabel>
            <Select
            value={10}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            </div>
            <Typography variant='h5' component='h5'>
              80,55 Российский рубль
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      </Container>
  );
}

export default App;
