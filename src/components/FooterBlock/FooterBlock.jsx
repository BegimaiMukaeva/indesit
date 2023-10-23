import React from 'react';
import { Link } from "react-router-dom";
import styles from './FooterBlock.module.css';
import instagramLogo from '../../img/instagramm.png';
import LogoHeader from "../../ui/logoHeader/LogoHeader";
import adminImg from '../../img/administrator.png'

const FooterBlock = () => {
    return (
        <footer>
            <div>
                <p>@2023 by master</p>
            </div>
            <div className={styles.logoHeader}>
                <LogoHeader />
            </div>
            <div>
                <a href="/">
                    <img className={styles.instagramImg} src={instagramLogo} alt=""/>
                </a>
                <a href="/">
                    <img className={styles.instagramImg} src={instagramLogo} alt=""/>
                </a>
                <Link to='/admin-authorization'>
                    <img className={styles.instagramImg} src={adminImg} alt=""/>
                </Link>
            </div>
        </footer>
    );
};

export default FooterBlock;