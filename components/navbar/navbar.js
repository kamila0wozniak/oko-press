import React from 'react'
import styles from './navbar.module.scss'
import Image from 'next/image'
import NavbarMovingPart from '../navbarLoggInPart/navbarLoggInPart'

export default function Navbar() {
    return(
        <div className={styles.navigation}>
            <div className={styles.navigationContent}>
                <div className={styles.notChangingMenu}>
                    <div className={styles.centerImage}>
                        <Image src={"/logo.png"} layout="fixed" alt="logo" width={33} height={32} /></div>
                    <div className={styles.centerLinks}>
                        <a className={styles.menuLink}>Wydarzenia</a>
                        <a className={styles.menuLink}>Kontakt</a>
                        <a className={styles.menuLink}>Wesprzyj nas</a>
                    </div>
                </div>
                <NavbarMovingPart />
            </div>
        </div>
    )
};
