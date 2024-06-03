import React from 'react'; 
import logo from '../assets/images/logo_copcust.svg';
const Header = () => {
    return (
        <div>
        <div>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo CopCust" />
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
            <button className='btn'>Inscription / Connexion</button>
          </div>
        </nav>
      </header>
    </div>
        </div>
    )
}

export default Header;