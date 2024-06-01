import React from 'react'; 
const Header = () => {
    return (
        <div>
        <div>
      <header>
        <nav>
          <div className="logo">
            <img src="assets/images/alcyone_logo.svg" alt="Logo Alcyone" />
          </div>
        </nav>
      </header>
      <main className="container">
        <h1>
          Site en construction
          <span className="text-mikado-yellow">...</span>
        </h1>
      </main>
      <footer className="d-flex">
        <div className="logo-footer">
          <img src="assets/images/alcyone_logo.svg" alt="Logo footer" />
        </div>
        <div className="coordonnees">
          <ul>
            <li className="d-flex">
              <img src="assets/images/phone.svg" alt="téléphone" />
              <p>01 23 45 67 89</p>
            </li>
            <li className="d-flex">
              <img src="assets/images/mail.svg" alt="mail" />
              <p>agencalcyone@gmail.com</p>
            </li>
            <li>
              <p>8 bis rue de la Fontaine au Roi, 75011 Paris</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
        </div>
    )
}

export default Header;