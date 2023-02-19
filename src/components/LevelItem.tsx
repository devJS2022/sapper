import React,{FC, useState} from 'react';
import { ILevel } from '../interface/ILevel';

interface IProps {
    levelList: ILevel
    select(e: React.ChangeEvent<HTMLInputElement>, id: number): void
    levelTable(sizeRow: number, sizeCol: number, time: number): void
    sizeCol: number
    sizeRow: number
    time: number
}

export const LevelItem: FC<IProps> = ({levelList, select, levelTable, sizeCol, sizeRow, time}: IProps) => {
    const [checked, setChecked] = useState(false);

    const changeCheck = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        setChecked(!checked)
        select(e, id)
        levelTable(sizeRow, sizeCol, time)
    }

    return(
        <li className="level__item" key={levelList.id}>
            <label htmlFor={levelList.level} className="button level__label">
                    <input 
                        type="radio" 
                        id={levelList.level}
                        name='level'
                        checked={checked}
                        onChange={(e) => changeCheck(e, levelList.id)}
                    />
            {levelList.title}</label>
        </li>
    )
}