import {FC, useState} from 'react';
import { Level } from './Level';
import { Footer } from './Footer';

interface IProps {
    start(): void
}

export const Modal: FC<IProps> = ({start}: IProps) => {
    const [name, setName] = useState('')

    const getName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }


    return(
        <div className='modal'>
            <h1 className='modal__title'>Sapper Online</h1>
            <form className="modal__form">
                <input 
                    type="text" 
                    value={name}
                    onChange={getName}
                    placeholder='Enter a name...'
                    className='button modal__input'
                />
                <Level />
                <button 
                    className='button modal__button'
                    type='button'
                    onClick={start}
                >Start the game</button>
            </form>
            <Footer />
        </div>
    )
}