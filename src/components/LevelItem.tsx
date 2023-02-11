import {FC, useState} from 'react';
import { ILevel } from '../interface/ILevel';

interface IProps {
    levelList: ILevel
}

export const LevelItem: FC<IProps> = ({levelList}: IProps) => {
    const [checked, setChecked] = useState(false);

    const changeCheck = () => {
        setChecked(!checked)
    }

    return(
        <li className="level__item" key={levelList.id}>
            <label htmlFor={levelList.level} className="button level__label">
                    <input 
                        type="radio" 
                        id={levelList.level}
                        name='level'
                        checked={checked}
                        onChange={changeCheck}
                    />
            {levelList.title}</label>
        </li>
    )
}