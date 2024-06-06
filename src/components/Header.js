import React from 'react'; 
import logo from '../assets/images/logo_copcust_blanc.svg';
import logoMobile from '../assets/images/logo_mini_copcust_blanc.svg';
import menuMobile from '../assets/images/menu.png';
const Header = () => {
    return (
        <div>
        <div>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo CopCust" />
          </div>
          <div className="logo-mobile">
            <img src={logoMobile} alt="Logo mobile CopCust" />
          </div>
          <div className='menu-mobile'>
            <img src={menuMobile} alt="Logo CopCust" />
              
          </div>
          <div className='menu'>
            <ul>
              <li>Accueil</li>
              <li>Produits</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='button'>
            <button className="btn-n-border">Inscription / Connexion</button>
          </div>
        </nav>
      </header>
    </div>
        </div>
    )
}

export default Header;