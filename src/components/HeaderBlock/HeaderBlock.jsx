import React from 'react';
import styles from './HeaderBlock.module.css'
import LogoHeader from '../../ui/logoHeader/LogoHeader'
import { Link } from "react-router-dom";

const HeaderBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <LogoHeader />
                <Link to='/'>
                    <p className={styles.headerMenuText}>Холодильники</p>
                </Link>
                <Link to='/'>
                    <p className={styles.headerMenuText}>Морозильники</p>
                </Link>
                <Link to='/'>
                    <p className={styles.headerMenuText}>Стиральные машины</p>
                </Link>
            </div>
        </div>
    );
};

export default HeaderBlock;