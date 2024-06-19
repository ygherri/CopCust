import React from 'react';
import logoMobile from '../../src/images/logo_mini_copcust.svg';
import arrowBottom from '../../src/images/arrow-bottom.svg';
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
import creditCard from '../../src/images/credit-card.png';
import homeIcon from '../../src/images/home.png';
import paintBrush from '../../src/images/paint-brush.png';
import blogImage1 from '../../src/images/9.png';
import blogImage2 from '../../src/images/10.png';
import blogImage3 from '../../src/images/11.png';
import leftTitle from '../../src/images/left-title.svg';
import rightTitle from '../../src/images/right-title.svg';
import tiktokIcon from '../../src/images/social_media/tiktok.svg';
import instagramIcon from '../../src/images/social_media/instagram.svg';
import pinterestIcon from '../../src/images/social_media/pinterest.svg';
import logoCopcust from '../../src/images/logo-copcust.png';
import menu from '../../src/images/menu-burger.png'
function LandingPage() {
  return (
    <div>
      <header>
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
        </nav>
        <div className="header-text">
          <h1 className="h1-desktop"><span className="text-blue">Copcust</span> <br />
            Votre art au<br />
            Pieds des autres
          </h1>
          <h1 className="h1-mobile"><span className="text-blue">Copcust</span> <br />
            Votre art au<br />
            Pieds des <br />autres
          </h1>
          <p>Le site numéro 1 dans la vente de sneakers customisées !</p>
          <div className="scroll-mobile">
            <p>Je deviens</p>
            <img src={arrowBottom} alt="" />
          </div>
          <div className="btn-nav btn-rose">
            <button> 
              Je veux vendre mes customs
            </button>
          </div>
        </div>
        <div className="scroll">
          <p>Je deviens</p>
          <img src={arrowBottom} alt="" />
        </div>
      </header>
      <div className="concept">
        <div className="concept-title">
          <p className="f-bold title-uppercase">Notre concept</p>
        </div>
        <div className="d-flex-mobile d-flex-concept">
          <div className="left_concept">
            <h2>Vends ton art et <span className="text-blue">révolutionne  <br /> le style</span> de tous !
            </h2>
          </div>
          <div className="right_concept">
            <div className="text-concept">
              <p>Rejoint une communauté vibrante de créateurs indépendants qui ne demandent qu'à transformer des chaussures en œuvres d'art.</p>
              <div className="concept_stat">
                <div className="left_stat">
                  <p className="text-blue size-80">+ de <span>200</span></p>
                  <p className="f-bold">Ventes par mois</p>
                </div>
                <div className="right_stat">
                  <p className="text-blue size-80">+ de <span>10</span></p>
                  <p className="f-bold">Commandes par mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="artist-custom">
        <div className="title-m-b text-center p-40">
          <p className="title-m f-bold title-uppercase">Nos artist custom</p>
          <h2>Ils nos ont rejoint, <span className="text-rose">pourquoi pas vous ?</span></h2>
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
          <div className="btn-rose btn-position">
            <button>Je rejoins le groupe</button>
          </div>
        </div>
      </div>
      <div className="valeurs">
        <div className="titles">
          <div className="icones-title">
            <img className="left-title" src={leftTitle} alt="" />
            <p className="f-bold m-b-title">Nos valeurs ajoutés</p>
            <img className="right-title" src={rightTitle} alt="" />
          </div>
          <h2>Pourquoi vendre sur <span className="text-violet">CopCust</span> ?</h2>
        </div>
        <div className="cards-valeurs">
          <div className="card-item">
            <img src={creditCard} alt="card" />
            <h3>Paiement sécurisé</h3>
            <p>Le paiement se fait sur notre plateforme et nous nous assurons de la réception de la somme. </p>
          </div>
          <div className="card-item">
            <img src={homeIcon} alt="" />
            <h3>Gestion boutique</h3>
            <p>Vous obtenez un accès à votre boutique sur laquelle vous avez un contrôle total sur vos produits !</p>
          </div>
          <div className="card-item">
            <img src={paintBrush} alt="" />
            <h3>Expression libre</h3>
            <p>Chaque paire de sneakers est une oeuvre. Laissez parler votre art et vendez la ! </p>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="titles-blog">
          <p className="title-m f-bold">Le Blog</p>
          <div className="visit_blog">
            <h2>Les derniers <span className="text-orange">articles</span> juste <span className="text-orange">pour toi</span></h2>
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
              <div className="img-card"><img src={blogImage1} alt="" /></div>
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
              <div className="img-card"><img src={blogImage2} alt="" /></div>
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
              <div className="img-card"><img src={blogImage3} alt="" /></div>
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
          <h2>La vente des sneakers <br /><span className="text-rose">t’intéressent ?</span></h2>
          <p>Inscris-toi afin d’être l’un des premier à vendre tes produits sur Copcust  ! </p>
        </div>
        <div className="input-newsleter">
          <input type="text" className="input-width" placeholder="Nom" />
          <input type="text" className="input-width" placeholder="Prénom" />
          <input type="text" className="input-width" placeholder="Adresse mail" />
          <textarea className="input-width" placeholder="Entrez votre message "></textarea>
          <button className="submit btn-rose">Envoyer mon message</button>
        </div>
        <div className="footer-items">
          <div className="logo-footer">
          <img src={logoCopcust} alt="" />
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
    </div>
  );
}

export default LandingPage;
