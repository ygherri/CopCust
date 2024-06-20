import React, { useState } from 'react';
import arrowBottom from '../../src/images/arrow-bottom.svg';
import couronneMobile from '../../src/images/couronne-mobile.png';
import couronne from '../../src/images/couronne.png';
import paire1 from '../../src/images/paire1.png';
import paire2 from '../../src/images/paire2.png';
import paire3 from '../../src/images/paire3.png';
import paire4 from '../../src/images/paire4.png';
import logoMobile from '../../src/images/logo_mini_copcust.svg';
import logoCopcust from '../../src/images/logo-copcust.png';
import artist1 from '../../src/images/artist1.png';
import artist2 from '../../src/images/artist2.png';
import artist3 from '../../src/images/artist3.png';
import artist4 from '../../src/images/artist4.png';
import artist5 from '../../src/images/artist5.png';
import artist6 from '../../src/images/artist6.png';
import artist7 from '../../src/images/artist7.png';
import artist8 from '../../src/images/artist8.png';
import artist9 from '../../src/images/artist9.png';
import artist10 from '../../src/images/artist10.png';
import artist11 from '../../src/images/artist11.png';
import artist12 from '../../src/images/artist12.png';
import artist13 from '../../src/images/artist13.png';
import artist14 from '../../src/images/artist14.png';
import pairePerso1 from '../../src/images/paire-perso1.png';
import pairePerso2 from '../../src/images/paire-perso2.png';
import pairePerso3 from '../../src/images/paire-perso3.png';
import pairePerso4 from '../../src/images/paire-perso4.png';
import union from '../../src/images/union.png';
import following from '../../src/images/following.png';
import brush from '../../src/images/brush.png'
import blog9 from '../../src/images/9.png';
import blog10 from '../../src/images/10.png';
import blog11 from '../../src/images/11.png';
import tiktokIcon from '../../src/images/social_media/tiktok.svg';
import instagramIcon from '../../src/images/social_media/instagram.svg';
import pinterestIcon from '../../src/images/social_media/pinterest.svg';
import menu from '../../src/images/menu-burger.png'
function LandingPage() {

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  const [setCurrentSlide] = useState(0);
  return (
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      <header className="header2">
        <div className="nav-mobile">
          <div className="logo-mobile">
            <img src={logoMobile} alt="logo mobile" />
          </div>
          <img src={menu} alt="menu"/>
        </div>
        <nav>
          <div className="logo">
            <img src={logoCopcust} alt="" />
          </div>
          <div className='justify-content'>
          <div className='liens'>
            <ul>
                <li>Lien</li>
                <li>Lien</li>
                <li>Lien</li>
            </ul>
          </div>
          <div className='btn-signin'>S'inscrire à la waitlist</div>
          </div>
        </nav>
        <div className="header-text">
          <h1 className="h1-desktop">
            <span className="text-blue">Copcust</span> <br />
            L'art à vos<br />
            Pieds !
          </h1>
          <h1 className="h1-mobile">
            <span className="text-blue">Copcust</span> <br />
            L'art à vos<br />
            Pieds !
          </h1>
          <p>Le site numéro 1 dans la vente de sneakers customisées !</p>
          <div className="scroll-mobile">
            <p>Je deviens</p>
            <img src="../public/arrow-bottom.svg" alt="" />
          </div>
          <div className="btn-nav btn-rose">
            <button>Je m'inscris à la waiting list</button>
          </div>
        </div>
        <div className="scroll scroll-mobile-2">
          <p>Customise tes paires</p>
          <img src={arrowBottom} alt="" />
        </div>
      </header>
      <div className="concept">
        <div className="concept-title">
          <img className="couronne-mobile" src={couronneMobile} alt="" />
          <img className="couronne" src={couronne} alt="" />
          <p className="f-bold title-upper">Notre concept</p>
        </div>
        <div className="d-flex-mobile d-flex-concept">
          <div className="left_concept">
            <h2>
              Révolutionne ton style avec<br />
              des <span className="text-blue">chaussures uniques</span>,<br />
              créées spécialement pour toi<br />
              par des <span className="text-blue">artistes custom <br />
              talentueux</span>.
            </h2>
          </div>
          <div className="right_concept">
            <div className="text-concept">
              <p>
                Découvrez une communauté vibrante de créateurs indépendants qui ne demandent qu'à transformer tes chaussures en œuvres d'art.
              </p>
              <div className="concept_stat">
                <div className="left_stat">
                  <p className="text-blue size-80">+ de 
                    <span> 20</span>
                  </p>
                  <p className="f-bold">artistes custom</p>
                </div>
                <div className="right_stat">
                  <p className="text-blue size-80">+ de 
                    <span> 10</span>
                  </p>
                  <p className="f-bold">styles différents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paires paires-bg">
        <div className="titles-paires">
          <p className="title-m f-bold title-upper">Nos paires</p>
          <h2><span className="text-rose">Acheter</span> directement<br />vos paires à personnaliser</h2>
        </div>
        <div className="gallery-sneakers">
          <img src={paire1} alt="" />
          <img src={paire2} alt="" />
          <img src={paire3} alt="" />
          <img src={paire4} alt="" />
        </div>
        <div className="btn-paires btn-rose"><button>Acheter ma paire personnalisée</button></div>
      </div>
      <div className="artist-custom  artist-custom-bg">
        <div className="title-m-b text-center p-40 titles-custom">
          <p className="title-m f-bold title-upper">Nos artist custom</p>
          <h2>Nos <span className="text-blue">Artist Custom </span>sont à votre disposition</h2>
        </div>
        <div className="gallery-artist">
          <div className="artist-1 artist-s">
            <img src={artist1} alt="" />
          </div>
          <div className="artist-2 artist-s">
          <img src={artist2} alt="" />
          </div>
          <div className="artist-3 artist-s">
          <img src={artist3} alt="" />
          </div>
          <div className="artist-4 artist-s">
          <img src={artist4} alt="" />
          </div>
          <div className="artist-5 artist-s">
          <img src={artist5} alt="" />
          </div>
          <div className="artist-6 artist-s">
          <img src={artist6} alt="" />
          </div>
          <div className="artist-7 artist-s">
          <img src={artist7} alt="" />
          </div>
          <div className="artist-8 artist-s">
          <img src={artist8} alt="" />
          </div>
          <div className="artist-9 artist-s">
          <img src={artist9} alt="" />
          </div>
          <div className="artist-10 artist-s">
          <img src={artist10} alt="" />
          </div>
          <div className="artist-11 artist-s">
          <img src={artist11} alt="" />
          </div>
          <div className="artist-12 artist-s">
          <img src={artist12} alt="" />
          </div>
          <div className="artist-13 artist-s">
          <img src={artist13} alt="" />
          </div>
          <div className="artist-14 artist-b">
          <img src={artist14} alt="" />
          </div>
          <div className="btn-rose btn-position"><button>Je découvre les partenaires</button></div>
        </div>
      </div>
      <div className="paires paires-perso">
        <div className="titles-paires">
          <p className="title-m f-bold title-upper">Nos paires personnalisées</p>
          <h2>Découvrez toutes les paires <span className="text-violet">déjà <br />personnalisées </span>qui vous attendent</h2>
        </div>
        <div className="gallery-sneakers">
          <img src={pairePerso1} alt="" />
          <img src={pairePerso2} alt="" />
          <img src={pairePerso3} alt="" />
          <img src={pairePerso4} alt="" />
        </div>
        <div className="btn-paires btn-rose"><button>Personnaliser ma paire</button></div>
      </div>
      <div className="valeurs">
        <div className="titles">
          <div className="icones-title">
            <img className="left-title" src="%PUBLIC_URL%/left-title.svg" alt="" />
            <p className="f-bold m-b-title">Nos valeurs ajoutées</p>
            <img className="right-title" src="%PUBLIC_URL%/right-title.svg" alt="" />
          </div>
          <h2>Pourquoi acheter sur 
            <span className="text-blue"> CopCust</span> ?</h2>
        </div>
        <img src="%PUBLIC_URL%/images/arrow-right.png" alt="" />
        <div className="cards-valeurs">
          <div className="card-item">
            <img src={union} alt="" />
            <h3>Suivi de ton colis</h3>
            <p>A tout moment, tu peux suivre étape par étape la création de ta sneakers customisée ! </p>
          </div>
          <div className="card-item">
            <img src={following} alt="" />
            <h3>Large choix d’artistes custom</h3>
            <p>Nous mettons en avant des créateurs émergents et confirmés, Une sélection diverse de style pouvant répondre à tes envies !</p>
          </div>
          <div className="card-item">
            <img src={brush} alt="" />
            <h3>Expression libre</h3>
            <p>Chaque paire de sneakers est une œuvre. Copcust est plus qu'une simple marketplace, c'est une révolution dans la sneakers personnalisée.</p>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="titles-products">
          <p className="title-m f-bold">Les produits</p>
          <div>
            <h2>Les 
              <span className="text-orange">créations custom</span> de nos artistes...</h2>
          </div>
        </div>
        <div className="carousel-section">
          <div className="carousel">
            <div className="carousel-container">
              <div className="carousel-slide">
                <div className="card-container">
                  <div className="card img1"></div>
                  <p>Air force 1 custom animé</p>
                </div>
                <div className="card-container">
                  <div className="card img2"></div>
                  <p>Air Jordan custom phoque</p>
                </div>
                <div className="card-container">
                  <div className="card img3"></div>
                  <p>Air force 1 custom animé</p>
                </div>
                <div className="card-container">
                  <div className="card img4"></div>
                  <p>Air Jordan custom phoque</p>
                </div>
                <div className="card-container">
                  <div className="card img5"></div>
                  <p>Air force 1 custom animé</p>
                </div>
                <div className="card-container">
                  <div className="card img3"></div>
                  <p>Air Jordan custom phoque</p>
                </div>
              </div>
            </div>
            {/* <button className="prev" onClick="prevSlide()">❮</button>
            <button className="next" onClick="nextSlide()">❯</button> */}
            <div className="dots">
              <span className="dot" onClick={() => setCurrentSlide(0)}></span>
              <span className="dot" onClick={() => setCurrentSlide(1)}></span>
              <span className="dot" onClick={() => setCurrentSlide(2)}></span>
              <span className="dot" onClick={() => setCurrentSlide(3)}></span>
              <span className="dot" onClick={() => setCurrentSlide(4)}></span>
              <span className="dot" onClick={() => setCurrentSlide(5)}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="titles-blog">
          <p className="title-m f-bold title-upper">Le Blog</p>
          <div className="visit_blog">
            <h2>Les derniers <span className="text-blue">articles</span> juste <span className="text-blue">pour toi</span></h2>
            <div className="lien-blog">
              <p>Visiter le blog</p>
              <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8.5L1 16" stroke="#F18F01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="d-flex-blog">
          <div className="left_blog">
            <div className="img-article"></div>
            <p className="tag-blog">Conseils</p>
            <h3>Comment entretenir sa sneaker custom ?</h3>
            <p>Copcust te donne toutes les ficelles en main pour entretenir votre paire ! Consulte notre article et reprends ta paire de sneakers en main !</p>
            <div className="lien-article">
              <p>Lire l'article</p>
              <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8.5L1 16" stroke="#F18F01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="right_blog">
            <div className="card-article border-bottom p-t-0">
              <div className="img-card"><img src={blog9} alt="" /></div>
              <div className="article-text">
                <p className="tag-blog">Conseils</p>
                <h3>Que faire de mes anciennes sneakers ?</h3>
                <div className="lien-article">
                  <p>Lire l'article</p>
                  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8 8.5L1 16" stroke="#F18F01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="card-article border-bottom p-40">
              <div className="img-card"><img src={blog10} alt="" /></div>
              <div className="article-text">
                <p className="tag-blog">Tutoriel</p>
                <h3>Comment sélectionner son artiste custom ?</h3>
                <div className="lien-article">
                  <p>Lire l'article</p>
                  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8 8.5L1 16" stroke="#F18F01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="card-article p-40">
              <div className="img-card"><img src={blog11} alt="" /></div>
              <div className="article-text">
                <p className="tag-blog">Avis</p>
                <h3>Air force 1, la paire faite pour le custom ?</h3>
                <div className="lien-article">
                  <p>Lire l'article</p>
                  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8 8.5L1 16" stroke="#F18F01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="title-footer">
          <p className="uppercase f-bold">Notre Waiting list</p>
          <h2>Les sneakers customs 
            <span className="text-orange"> t’intéressent ?</span></h2>
          <p className='text-width'>Inscris-toi à notre waiting list pour découvrir en avant-première
            les paires de sneakers customisées de notre marketplace !</p>
        </div>
        <div className="input-newsleter input-newsleter-sign">
          <input type="text" className="m-b-50" placeholder="Entre ton adresse mail" />
          <button>S'inscrire</button>
        </div>
        <div className="footer-items">
          <div className="logo-footer">
            <img src={logoCopcust} alt='Logo CopCust' />
          </div>
          <div className="copyright">
            <p>COPCUST COPYRIGHT © 2024 - TOUS DROITS RÉSERVÉS</p>
          </div>
          <div className="rs-img">
          <a href="https://www.tiktok.com/@copcustfr"><img src={tiktokIcon} alt="" /></a>
            <a href="https://www.instagram.com/copcustfr/"><img src={instagramIcon} alt="" /></a>
            <a href="https://pin.it/3HSQjkm3a"><img src={pinterestIcon} alt="" /></a>
          </div>
          <div className="copyright-mobile">
            <p>COPCUST COPYRIGHT © 2024 - TOUS DROITS RÉSERVÉS</p>
          </div>
        </div>
      </footer>
      <script src="./script.js"></script>
    </div>
  );
}

export default LandingPage;
