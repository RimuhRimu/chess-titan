import './App.css';
import './styles/table.css'
import './styles/ButtonCore.css'
import './styles/App.css'
// import $ from './components/document.jsx'
import {useState} from 'react'
// import Piece from './components/piece.jsx'
import ChessTable from './components/table.jsx'
import Handle from './components/handle.jsx'
import Whites from './components/whites.jsx'
import Blacks from './components/blacks.jsx'
// import NewTurn from './components/turn.jsx'
// import movements from './components/movements.jsx'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
    const [turn,setTurn] = useState(true)
    const chessWhites = Whites();
    const chessBlacks = Blacks();
    const HandleTurn = (e) => {
        Handle(e,chessWhites,chessBlacks,turn,setTurn)
    };
      return (
    <div className="App">
      <header className="App-header">
          <h1>hi</h1>
          <h2>this is a chess titan game in development :)</h2>
      </header>
        <div className="table">
            <ChessTable entries={[chessWhites.WhitesState,chessBlacks.BlacksState]} handle={HandleTurn} /> 
        </div>
    </div>
  );
}

export default App;
