import React from 'react';
import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import CurrenciesStore from "../../stores/currenciesStore";

interface IConverterBlock {
    classes: any;
    currenciesStore?: CurrenciesStore;
}

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(
  observer(({ classes, currenciesStore })=> {
  const coins: string[] = currenciesStore!.getItems.map(coin => coin.name);

  return (<Paper className={classes.paper}>
        <div className={classes.currencyInputBox}>
            <FormControl className={classes.currencyInput}>
                <TextField label="Сумма" />
            </FormControl>
            <FormControl className={classes.currencyType}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                    Валюта
                </InputLabel>
                <Select value={coins[0]}>
                    {
                        coins.map(name =>
                          <MenuItem value={name}>{name}</MenuItem>)
                    }

                </Select>
            </FormControl>
        </div>
        <div className={classes.currencyInputBox}>
            <FormControl className={classes.currencyInput}>
                <TextField label="Сумма" />
            </FormControl>
            <FormControl className={classes.currencyType}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                    Валюта
                </InputLabel>
                <Select value={coins[0]}>
                    {
                        coins.map(name =>
                          <MenuItem value={name}>{name}</MenuItem>)
                    }

                </Select>
            </FormControl>
        </div>
    </Paper>)
}))

export default ConverterBlock;