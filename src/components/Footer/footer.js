import React from 'react';
import './footer.css';

const Footer = () => {
  return (<div className="footer">
        <footer>
          <div className="footer_container">
             
            <div className="contacts">
                <span>Контакти</span>
                <span>+380667854231</span>
                <span>+380957654491</span>
                <span>+380732638255</span>
            </div>
            <ul className="footer_menu">
                <li className="footer_menu_item" ><a href='#services'>Послуги</a></li>
                <li className="footer_menu_item" ><a href='#employees'>Персонал</a></li>
                <li className="footer_menu_item" ><a href='#aboutUs'>Про нас</a></li>
            </ul>
          </div>
          <div className="copyright">© COPYRIGHT 2021 | MADE BY REDCHUK ALEXANDER AND ANDREW CHUDIEVICH</div> 
        </footer>
    </div>);
}

export default Footer;
