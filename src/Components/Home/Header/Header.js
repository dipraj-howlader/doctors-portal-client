import React from 'react';
import NavvBarr from '../../Shared/NavvBarr/NavvBarr';
import HeaderMain from "../HeaderMain/HeaderMain";
import './Header.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="headerContainer">
           <NavvBarr></NavvBarr>
           <HeaderMain></HeaderMain>
           <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header; 