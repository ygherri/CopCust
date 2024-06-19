import React, { useState } from 'react';

function LandingPage() {
    const [setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      <header className="header2">
        <div className="nav-mobile">
          <div className="logo-mobile">
            <img src="../public/images/logo_mini_copcust.svg" alt="logo mobile" />
          </div>
        </div>
        <nav>
          <div className="logo">
            {/* SVG content here */}
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
          <img src="../public/arrow-bottom.svg" alt="" />
        </div>
      </header>
      <div className="concept">
        <div className="concept-title">
          <img className="couronne-mobile" src="../public/couronne-mobile.png" alt="" />
          <img className="couronne" src="../public/couronne.png" alt="" />
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
                    <span>20</span>
                  </p>
                  <p className="f-bold">artistes custom</p>
                </div>
                <div className="right_stat">
                  <p className="text-blue size-80">+ de 
                    <span>10</span>
                  </p>
                  <p className="f-bold">styles différents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paires">
        <div className="titles-paires">
          <p className="title-m f-bold title-upper">Nos paires</p>
          <h2><span className="text-rose">Acheter</span> directement<br />vos paires à personnaliser</h2>
        </div>
        <div className="gallery-sneakers">
          <img src="../public/images/paire1.png" alt="" />
          <img src="../public/images/paire2.png" alt="" />
          <img src="../public/images/paire3.png" alt="" />
          <img src="../public/images/paire4.png" alt="" />
        </div>
        <div className="btn-paires btn-rose"><button>Acheter ma paire personnalisée</button></div>
      </div>
      <div className="artist-custom">
        <div className="title-m-b">
          <p className="title-m f-bold title-upper">Nos artist custom</p>
          <h2>Nos <span className="text-blue">Artist Custom </span>sont à votre <br />disposition</h2>
        </div>
        <div className="gallery-artist">
          <div className="artist-1 artist-s">
            <img src="../public/images/artist1.png" alt="" />
          </div>
          <div className="artist-2 artist-s">
            <img src="../public/images/artist2.png" alt="" />
          </div>
          <div className="artist-3 artist-s">
            <img src="../public/images/artist3.png" alt="" />
          </div>
          <div className="artist-4 artist-s">
            <img src="../public/images/artist4.png" alt="" />
          </div>
          <div className="artist-5 artist-s">
            <img src="../public/images/artist5.png" alt="" />
          </div>
          <div className="artist-6 artist-s">
            <img src="../public/images/artist6.png" alt="" />
          </div>
          <div className="artist-7 artist-s">
            <img src="../public/images/artist7.png" alt="" />
          </div>
          <div className="artist-8 artist-s">
            <img src="../public/images/artist8.png" alt="" />
          </div>
          <div className="artist-9 artist-s">
            <img src="../public/images/artist9.png" alt="" />
          </div>
          <div className="artist-10 artist-s">
            <img src="../public/images/artist10.png" alt="" />
          </div>
          <div className="artist-11 artist-s">
            <img src="../public/images/artist11.png" alt="" />
          </div>
          <div className="artist-12 artist-s">
            <img src="../public/images/artist12.png" alt="" />
          </div>
          <div className="artist-13 artist-s">
            <img src="../public/images/artist13.png" alt="" />
          </div>
          <div className="artist-14 artist-b">
            <img src="../public/images/artist14.png" alt="" />
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
          <img src="../public/images/paire-perso1.png" alt="" />
          <img src="../public/images/paire-perso2.png" alt="" />
          <img src="../public/images/paire-perso3.png" alt="" />
          <img src="../public/images/paire-perso4.png" alt="" />
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
            <span className="text-blue">CopCust</span> ?</h2>
        </div>
        <img src="%PUBLIC_URL%/images/arrow-right.png" alt="" />
        <div className="cards-valeurs">
          <div className="card-item">
            <img src="../public/images/union.png" alt="" />
            <h3>Suivi de ton colis</h3>
            <p>A tout moment, tu peux suivre étape par étape la création de ta sneakers customisée ! </p>
          </div>
          <div className="card-item">
            <img src="../public/images/following.png" alt="" />
            <h3>Large choix d’artistes custom</h3>
            <p>Nous mettons en avant des créateurs émergents et confirmés, Une sélection diverse de style pouvant répondre à tes envies !</p>
          </div>
          <div className="card-item">
            <img src="../public/images/brush.png" alt="" />
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
              <div className="img-card"><img src="../public/9.png" alt="" /></div>
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
              <div className="img-card"><img src="../public/10.png" alt="" /></div>
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
              <div className="img-card"><img src="../public/11.png" alt="" /></div>
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
            <span className="text-orange">t’intéressent ?</span></h2>
          <p>Inscris-toi à notre waiting list pour découvrir en avant-première <br />
            les paires de sneakers customisées de notre marketplace !</p>
        </div>
        <div className="input-newsleter input-newsleter-sign">
          <input type="text" className="m-b-50" placeholder="Entre ton adresse mail" />
          <button className="m-t-50">S'inscrire</button>
        </div>
        <div className="footer-items">
          <div className="logo-footer">
            {/* SVG content here */}
          </div>
          <div className="copyright">
            <p>COPCUST COPYRIGHT © 2024 - TOUS DROITS RÉSERVÉS</p>
          </div>
          <div className="rs-img">
            <img src="./social_media/tiktok.svg" alt="" />
            <img src="./social_media/instagram.svg" alt="" />
            <img src="./social_media/facebook.svg" alt="" />
            <img src="./social_media/pinterest.svg" alt="" />
            <img src="./social_media/youtube.svg" alt="" />
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
