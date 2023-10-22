import React from 'react';
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import MainPageBanner from '../ui/mainPageBanner/MainPageBanner';
import CategoriesBlock from "../components/CategoriesBlock/CategoriesBlock";
import CategoryText from '../ui/categoryText/CategoryText';
import FooterBlock from '../components/FooterBlock/FooterBlock'
import ServiceBlock from '../components/ServiceBlock/ServiceBlock'

const MainPage = () => {
    return (
        <div>
            <HeaderBlock />
            <MainPageBanner />
            <CategoryText />
            <CategoriesBlock />
            <ServiceBlock />
            <FooterBlock />
        </div>
    );
};

export default MainPage;