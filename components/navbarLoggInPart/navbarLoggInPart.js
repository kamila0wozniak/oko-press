import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import styles from './navbarLoggInPart.module.scss';

const NavbarMovingPart = () => {

    const [ isLogged, setIsLogged ] = useState(false);

    return (
        <div className={styles.iconsContainer}>
            <FaSearch />
            {!isLogged && <button className={styles.button} onClick={() => setIsLogged(!isLogged)}>zaloguj się</button>}
            {isLogged && <div>
                <FaRegBell className={styles.icon}/>
                <FaUserCircle className={styles.icon}/>
            </div>}
        </div>
    );
};

export default NavbarMovingPart;
