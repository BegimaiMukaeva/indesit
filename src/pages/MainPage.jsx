import React from 'react';
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import MainPageBanner from '../ui/mainPageBanner/MainPageBanner';
import CategoriesBlock from "../components/CategoriesBlock/CategoriesBlock";
import CategoryText from '../ui/categoryText/CategoryText';
import FooterBlock from '../components/FooterBlock/FooterBlock'
import ServiceBlock from '../components/ServiceBlock/ServiceBlock'
import bannerImg from '../img/50547755.jpg';
import bannerImg1 from '../img/bannerImg.png';
import bannerImg2 from '../img/Image1_indesit_compressed.jpg';

const MainPage = () => {
      const images = [
        bannerImg,
        bannerImg1,
        bannerImg2,
    ];

    return (
        <div>
            <HeaderBlock />
            <MainPageBanner images={images}/>
            <CategoryText />
            <CategoriesBlock />
            <ServiceBlock />
            <FooterBlock />
        </div>
    );
};

export default MainPage;