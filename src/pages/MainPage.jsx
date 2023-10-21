import React from 'react';
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import MainPageBanner from '../ui/mainPageBanner/MainPageBanner';
import CategoriesBlock from "../components/CategoriesBlock/CategoriesBlock";
import CategoryText from '../ui/categoryText/CategoryText';
import FooterBlock from '../components/FooterBlock/FooterBlock'

const MainPage = () => {
    return (
        <div>
            <HeaderBlock />
            <MainPageBanner />
            <CategoryText />
            <CategoriesBlock />
            <FooterBlock />
        </div>
    );
};

export default MainPage;