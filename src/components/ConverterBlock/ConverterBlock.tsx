import React from 'react';
import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@material-ui/core";

interface IConverterBlock {
    classes: any;
}

const ConverterBlock: React.FC<IConverterBlock> = ({ classes }):React.ReactElement => {
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
                <Select value={10}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                <Select value={10}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    </Paper>)
};

export default ConverterBlock;