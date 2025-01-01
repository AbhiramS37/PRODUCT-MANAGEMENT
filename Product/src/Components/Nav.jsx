import React from 'react'
import styles from './Nav.module.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className={styles.qq}>
            <ul>
                <li><Link to="/" className={styles.q} >Home</Link></li>
                <li><Link to="/add" className={styles.q}>Add-Product</Link></li>
            </ul>
        </div>
    )
}

export default Nav
