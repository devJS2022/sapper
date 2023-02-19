import React from 'react';
import {FC} from 'react'
import { Table } from '../components/Table';

interface IProps {
    col: number
    row: number
}

export const Game: FC<IProps> = ({col, row}: IProps) => {
    return(
        <div className="game">
            <Table col={col} row={row}/>
        </div>
    )
}