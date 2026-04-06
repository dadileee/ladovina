import { useState } from 'react'
import logo from './assets/logo.png'
import boardImg from './assets/board.jpg'
import karteImg from './assets/karte.jpg'
import diceImg from './assets/dice.jpg'
import './App.css'


const descriptions = {
  board: {
    title: 'Board Games',
    text: 'Otkrijte čaroliju društvenih igara! Od klasičnih strategija do modernih euro-igara, naša kolekcija nudi nešto za svakoga. Okupite prijatelje i porodicu oko stola i doživite nezaboravne trenutke zabave, smijaha i nadmetanja.'
  },
  cards: {
    title: 'Trading Collectible Cards',
    text: 'Uronite u svijet kolekcionarskih karata! Magic: The Gathering, Pokemon, Yu-Gi-Oh i mnoge druge igre čekaju vas u našem klubu. Gradite svoje špilove, učite strategije i takmičite se na turnirima sa igračima svih nivoa.'
  },
  rpg: {
    title: 'Role-playing Games',
    text: 'Postanite heroj sopstvene priče! Dungeons & Dragons i ostale RPG igre nude beskrajne avanture u svjetovima punim mašte. Pronađite grupu, kreirajte lika i krenite na epsku avanturu predvođenu iskusnim Dungeon Masterom.'
  }
}

function App() {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <header className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" />
          <span>Ladovina</span>
        </div>
        <nav className="navbar-links">
          <a href="#">Početna</a>
          <a href="#">O nama</a>
          <a href="#">Usluge</a>
          <a href="#">Kontakt</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Ladovina</h1>
            <p><em>klub društvenih igara</em></p>
          </div>
        </section>

        <section className="rays-section">

          {/* Tekst lijevo - Board Games */}
          <div className={`side-text side-left ${hovered === 'board' ? 'visible' : ''}`}>
            <h2>{descriptions.board.title}</h2>
            <p>{descriptions.board.text}</p>
          </div>

          <div className="circle-wrapper">
            <div className="circle-menu">

              <a href="#"
                className="ray-card ray-bottom-left"
                onMouseEnter={() => setHovered('board')}
                onMouseLeave={() => setHovered(null)}>
                <div className="card-inner">
                  <img src={boardImg} alt="Board Games" />
                  <span>Board Games</span>
                </div>
              </a>

              <a href="#"
                className="ray-card ray-top"
                onMouseEnter={() => setHovered('cards')}
                onMouseLeave={() => setHovered(null)}>
                <div className="card-inner">
                  <img src={karteImg} alt="Trading Collectible Cards" />
                  <span>Trading Collectible Cards</span>
                </div>
              </a>

              <a href="#"
                className="ray-card ray-bottom-right"
                onMouseEnter={() => setHovered('rpg')}
                onMouseLeave={() => setHovered(null)}>
                <div className="card-inner">
                   <img src={diceImg} alt="Role-playing Games" />
                  <span>Role-playing Games</span>
                </div>
              </a>

              <svg className="circle-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <line x1="300" y1="300" x2="300" y2="0"   stroke="rgba(24,158,101,0.9)" strokeWidth="2"/>
                <line x1="300" y1="300" x2="40"  y2="450" stroke="rgba(24,158,101,0.9)" strokeWidth="2"/>
                <line x1="300" y1="300" x2="560" y2="450" stroke="rgba(24,158,101,0.9)" strokeWidth="2"/>
              </svg>

              <div className="center-triangle"></div>
            </div>

            {/* Tekst ispod - Role-playing Games */}
            <div className={`side-text side-bottom ${hovered === 'rpg' ? 'visible' : ''}`}>
              <h2>{descriptions.rpg.title}</h2>
              <p>{descriptions.rpg.text}</p>
            </div>
          </div>

          {/* Tekst desno - Trading Cards */}
          <div className={`side-text side-right ${hovered === 'cards' ? 'visible' : ''}`}>
            <h2>{descriptions.cards.title}</h2>
            <p>{descriptions.cards.text}</p>
          </div>

        </section>

        <section className="login-section">
  <div className="login-container">


    <div className="login-box">
      <h2 className="login-title">Prijava igrača</h2>
      <p className="login-subtitle">Dobrodošao natrag u klub</p>

      <div className="login-form">
        <div className="input-group">
          <label>Korisničko ime</label>
          <input type="text" placeholder="Unesite korisničko ime" />
        </div>

        <div className="input-group">
          <label>Lozinka</label>
          <input type="password" placeholder="Unesite lozinku" />
        </div>

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Zapamti me</span>
          </label>
          <a href="#" className="forgot-pass">Zaboravili ste lozinku?</a>
        </div>

        <button className="login-btn">Prijavi se</button>

        <p className="register-link">
          Nemate nalog? <a href="#">Registrujte se</a>
        </p>
      </div>
    </div>
  </div>
</section>
      </main>
    </>
  )
}

export default App