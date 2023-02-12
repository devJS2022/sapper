import {FC, useState} from 'react';
import { Level } from './Level';
import { Footer } from './Footer';
import { ErrorName } from './ErrorName';
import { ErrorLevel } from './ErrorLevel';

interface IProps {
    newGame(name:string, id: number): void
    errorName: boolean
    errorLevel: boolean
}

export const Modal: FC<IProps> = ({newGame, errorName, errorLevel}: IProps) => {
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)

    const getName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const selectLevel = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
            setLevel(id)
    }


    return(
        <div className='modal'>
            <h1 className='modal__title'>Sapper Online</h1>
            {errorName && <ErrorName />}
            {errorLevel && <ErrorLevel />}
            <form className="modal__form">
                <input 
                    type="text" 
                    value={name}
                    onChange={getName}
                    placeholder='Enter a name...'
                    className='button modal__input'
                />
                <Level select={selectLevel}/>
                <button 
                    className='button modal__button'
                    type='button'
                    onClick={() => newGame(name, level)}
                >Start the game</button>
            </form>
            <Footer />
        </div>
    )
}