import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

    return (<div className="header">
        <header>
          <img className="logo" src="https://play-lh.googleusercontent.com/CKMc8aMTpE3IZ6WLAeCckenZuffgRGrg893L1GiTlsfziNbaJpSqd0y8aXUVqzWxpA" />
          <ul className="menu">
            <li className="menu_item" ><a href='#services'>Послуги</a></li>
            <li className="menu_item" ><a href='#employees'>Персонал</a></li>
            <li className="menu_item" ><a href='#aboutUs'>Про нас</a></li>
          </ul>
        </header>
    </div>)
}

export default Header;