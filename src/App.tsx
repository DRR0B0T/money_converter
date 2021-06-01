import React from 'react';
import axios from 'axios';
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
    currencyIcon: {
      width: 18,
      height: 18,
      borderRadius: 30,
    }
  }),
);

type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
}

function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  React.useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
    .then(({ data }) => {
      const coins: TCoin[] = data.Data.map((coin: any) => {
        const obj: TCoin = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(3),
          volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
        }
        return obj
      })
      setAllCoins(coins)
    })
  },[classes])

  return (
    <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={3}>
        <Grid item xs={8}>
          
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">FullName</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">volume24hour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCoins.map((coin) => (
            <TableRow key={coin.name}>
              <TableCell><img className={classes.currencyIcon} src={coin.imageUrl} alt="coin icon" /></TableCell>
              <TableCell align="left">{coin.name}</TableCell>
              <TableCell align="left">{coin.fullName}</TableCell>
              <TableCell align="left">${coin.price}</TableCell>
              <TableCell align="left">${coin.volume24Hour}</TableCell>
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
