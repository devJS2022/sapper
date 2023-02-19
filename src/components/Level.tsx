import React, { FC } from 'react';
import { LevelItem } from './LevelItem';
import { ILevel } from '../interface/ILevel';

interface IProps {
    select(e: React.ChangeEvent<HTMLInputElement>, id: number): void
    levelTable(sizeRow: number, sizeCol: number, time: number): void
}


export const Level: FC<IProps> = ({select, levelTable}: IProps) => {
    const levelList: ILevel[] = [
        {title: 'Easy 8x8, 10 min', level: 'easy', id: 1, row: 8, column: 8, time: 600},
        {title: 'Middle 16x16, 40 min', level: 'middle', id: 2, row: 16, column: 16, time: 2400},
        {title: 'Hard 32x16, 100 min', level: 'hard', id: 3, row: 32, column: 16, time: 6000}
    ]

    return(
        <ul className="level">
            {
                levelList.map(item => {
                    return <LevelItem levelList={item} select={select} levelTable={levelTable} sizeRow={item.row} sizeCol={item.column} time={item.time} key={item.id}/>
                })
            }
        </ul>
    )
}