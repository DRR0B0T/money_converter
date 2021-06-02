import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import { TCoin } from "../../types/types";


interface ICryptoTable {
    items: TCoin[];
    classes: any;
}


const CryptoTable: React.FC<ICryptoTable> = ({ classes, items }): React.ReactElement => {

    return (<TableContainer component={Paper}>
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
                {!items.length
                    ? "Загрузка..."
                    : items.map((coin) => (
                        <TableRow key={coin.name}>
                            <TableCell>
                                <img
                                    className={classes.currencyIcon}
                                    src={coin.imageUrl}
                                    alt="coin icon"
                                />
                            </TableCell>
                            <TableCell align="left">{coin.name}</TableCell>
                            <TableCell align="left">{coin.fullName}</TableCell>
                            <TableCell align="left">${coin.price}</TableCell>
                            <TableCell align="left">${coin.volume24Hour}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default CryptoTable;