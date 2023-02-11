import {FC, useState} from 'react';
import {Link} from 'react-router-dom'; 

export const Header: FC = () => {
    const [burger, setBurger] = useState<boolean>(false)
    const addClass = burger ? 'active' : ''
    const classes = ['header__burger', addClass]

    const burgerToggle = () => {
        setBurger(prev => !prev)
    }
    return (
        <header className="header">
            <div className="header__logo">Sapper Game</div>
            <button 
                type='button' 
                className={classes.join(' ')}
                onClick={() => burgerToggle()}
            >
                <span></span>
            </button>
            <ul className="header__list">
                <li className="header__item">
                    <Link className='button' to='/'>Game</Link>
                </li>
                <li className="header__item">
                    <Link className='button' to='/Leaders'>List of Leaders</Link>
                </li>
                <li className="header__item">
                    <Link className='button' to='/Setting'>Settings</Link>
                </li>
            </ul>
        </header>
    )
}