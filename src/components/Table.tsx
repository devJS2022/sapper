import React, { useState } from 'react'
import { FC } from 'react'
import { TableItem } from './TableItem'

interface IProps {
    col: number
    row: number
}

export const Table: FC<IProps> = ({col, row}: IProps) => {
    let num = 1
    const arrayTable: number[][][]= []
    const numItem: number[] = []
    const ammountMine = 10

    for (let i=0; i < row; i++) {
        const arrayArrayTable = []
        for (let j=0; j < col; j++) {
            arrayArrayTable.push([j, num])
            num += 1
        }
        arrayTable.push(arrayArrayTable)
    }

    for(let i=0; i < num; i++) {
        numItem.push(i+1)
    }
    
    const sortNum = numItem.sort(() => Math.random() - 0.5)

   
    
    return (
        <div className="table">
            {
                arrayTable.map((item, x) => {
                    return(
                        <div className="table__row">
                            {
                                item.map((item, y) => {
                                    return(
                                        <TableItem x={x} y={y}  num={item[1]} sortNum={sortNum} ammountMine={ammountMine} />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}