import { FC } from 'react';

export const Footer: FC = () => {
    return(
        <footer>
            <address className="footer__autor">
                by Alexander Ankudinov
            </address>
            <a href="https://github.com/devJS2022" className='footer__link'>github.com/devJS2022</a>
        </footer>
    )
}