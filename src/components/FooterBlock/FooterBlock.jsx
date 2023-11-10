import React from 'react';
import { Link } from "react-router-dom";
import styles from './FooterBlock.module.css';
import instagramLogo from '../../img/icons8-instagram.svg';
import indesitLogo from "../../img/logo_indesit_white.png";
import faceBookLogo from '../../img/icons8-facebook.svg'
import adminImg from '../../img/icons8-admin-settings-male-30.png';
import twitterLogo from '../../img/icons8-twitter.svg';

const FooterBlock = () => {
    return (
        <footer>
            <div>
                <p className={styles.titleFooter}>@2023 by master</p>
            </div>
            <div className={styles.logoHeader}>
                <img src={indesitLogo} alt="" className={styles.indesitLogoFooter}/>
            </div>
            <div>
                <a href="/">
                    <img className={styles.instagramImg} src={instagramLogo} alt=""/>
                </a>
                <a href="/">
                    <img className={styles.instagramImg} src={faceBookLogo} alt=""/>
                </a>
                <a href="/">
                    <img className={styles.instagramImg} src={twitterLogo} alt=""/>
                </a>

                <Link to='/admin-authorization'>
                    <img className={styles.instagramImg} src={adminImg} alt=""/>
                </Link>
            </div>
        </footer>
    );
};

export default FooterBlock;