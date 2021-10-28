import Navbar from '../navbar/navbar'
import styles from './layout.module.scss'

export default function Layout ({children}) {
    return (
        <div className={styles.page}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}
