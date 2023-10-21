import React from 'react';
import bannerImg from '../../img/bannerImg.png';
import styles from './MainPageBanner.module.css';

const MainPageBanner = () => {
    return (
        <div>
            <div>
                <img className={styles.bannerImg} src={bannerImg} alt=""/>
            </div>
        </div>
    );
};

export default MainPageBanner;