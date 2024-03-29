import { useState } from 'react';
import './App.css';

const barcelonaPlayers = {
  Goalkeepers: [
    {
      Name: "Ter Stegen",
      Number: 1,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/ter_stegen.webp"
    },
    {
      Name: "Neto",
      Number: 13,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/neto.webp"
    }
  ],
  Defenders: [
    {
      Name: "Gerard Pique",
      Number: 3,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/PIQUE.webp"
    },
    {
      Name: "Jordi Alba",
      Number: 18,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/jordi_alba.webp"
    },
    {
      Name: "Sergino Dest",
      Number: 2,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/dest.webp"
    },
    {
      Name: "Ronald Araujo",
      Number: 4,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/araujo.webp"
    },
    {
      Name: "Dani Alves",
      Number: 8,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/dani_alves.webp"
    },
    {
      Name: "Clement Lenglet",
      Number: 15,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/lenglet.webp"
    }
  ],
  Midfielders: [
    {
      Name: "Sergio Busquets",
      Number: 5,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/sergio.webp"
    },
    {
      Name: "Riqui Puig",
      Number: 6,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/riqui.webp"
    },
    {
      Name: "Nico Gonzalez",
      Number: 14,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/NICO.webp"
    },
    {
      Name: "Pedri",
      Number: 16,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/pedri.webp"
    },
    {
      Name: "Sergio Roberto",
      Number: 20,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/sergi_roberto.webp"
    },
    {
      Name: "Frenkie de Jong",
      Number: 21,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/DE_JONG.webp"
    }
  ],
  Forwards: [
    {
      Name: "Dembele",
      Number: 7,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/dembele.webp"
    },
    {
      Name: "Memphis",
      Number: 9,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/depay.webp"
    },
    {
      Name: "Ansu Fati",
      Number: 10,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/ansu.webp"
    },
    {
      Name: "Adama Traore",
      Number: 11,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/ADAMA.webp"
    },
    {
      Name: "Luuk de Jong",
      Number: 17,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/Luuk-de-Jong.webp"
    },
    {
      Name: "Ferran Torres",
      Number: 19,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/ferran_torres.webp"
    },
    {
      Name: "Aubameyang",
      Number: 25,
      Image: "https://raw.githubusercontent.com/abhishake21/Project-images/main/barca-players/AUBAMEYANG.webp"
    }
  ]
}

function App() {
  const [position, setPosition] = useState("Goalkeepers");

  function positionClickHandler(position) {
    setPosition(position);
  }
  
  return (
    <div className="App">
      <header>
        <h1 className='heading'>Barcelona Squad 2021</h1>
        <nav className='position-list'>
          {Object.keys(barcelonaPlayers).map(position => 
            <li key={position} className="position" onClick={()=> positionClickHandler(position)}>{position}</li>
          )}
        </nav>
      </header>
      <main>
        {barcelonaPlayers[position].map(player => 
          <div key={player.Number} className='player'>
            <img className='player-image' src={player.Image} alt={player.Name} />
            <div className='player-info'>
              <span className='player--number'>{player.Number}</span> • {player.Name}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
