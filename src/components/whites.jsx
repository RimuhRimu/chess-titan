import {useState} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook,faChessKnight,faChessBishop,faChessPawn,faChessQueen,faChessKing } from '@fortawesome/free-solid-svg-icons'
library.add(faChessRook,faChessKnight,faChessBishop,faChessPawn,faChessQueen,faChessKing)

const Whites = (entries) => {
    const [WhitesState,setWhites] = useState({
        towerR: {
            type:'tower',
            fired:false,
            chess: 'whites',
            position:'a1',
            icon:<FontAwesomeIcon icon='chess-rook' size='3x' className='whites' />
        },
        towerL: {
            type:'tower',
            fired:false,
            chess: 'whites',
            position:'a8',
            icon:<FontAwesomeIcon icon='chess-rook'size='3x' className='whites' />
        },
        horseR:{
            type:'horse',
            fired:false,
            chess: 'whites',
            position:'a2',
            icon:<FontAwesomeIcon icon='chess-knight'size='3x' className='whites' />
        },
        horseL:{
            type:'horse',
            fired:false,
            chess: 'whites',
            position:'a7',
            icon:<FontAwesomeIcon icon='chess-knight'size='3x' className='whites' />
        },
        bishopR:{
            type:'bishop',
            fired:false,
            chess: 'whites',
            position:'a3',
            icon:<FontAwesomeIcon icon='chess-bishop'size='3x' className='whites' />
        },
        bishopL:{
            type:'bishop',
            fired:false,
            chess: 'whites',
            position:'a6',
            icon:<FontAwesomeIcon icon='chess-bishop'size='3x' className='whites' />
        },
        king:{
            type:'king',
            fired:false,
            chess: 'whites',
            position:'a4',
            icon:<FontAwesomeIcon icon='chess-king'size='3x' className='whites' />
        },
        queen:{
            type:'queen',
            fired:false,
            chess: 'whites',
            position:'a5',
            icon:<FontAwesomeIcon icon='chess-queen'size='3x' className='whites' />
        },
        pawn1:{
            type:'pawn',
            fired:false,
            chess: 'whites',
            position:'b1',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites' />
        },
        pawn2:{
            type:'pawn',
            fired:false,
            chess: 'whites',
            position:'b2',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites' />
        },
        pawn3:{
            type:'pawn',
            fired:false,
            chess: 'whites',
            position:'b3',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites' />
        },
        pawn4:{
            type:'pawn',
            fired:false,
            chess: 'whites',
            position:'b4',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites' />
        },
        pawn5:{
            type:'pawn',
            fired:false,
            chess: 'whites',
            position: 'b5',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites' />
        },
        pawn6:{
            type:'pawn',
            fired:false,
            chess: 'whites',
            position: 'b6',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites' />
        },
        pawn7:{
            type:'pawn',
            fired:false,
            chess: 'whites',
            position:'b7',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites' />
        },
        pawn8:{
            type:'pawn',
            fired:false,
            chess: 'whites', 
            position:'b8',
            icon:<FontAwesomeIcon icon='chess-pawn'size='3x' className='whites'  />
        },
    })
    return {
        WhitesState,setWhites
    }
}

export default Whites
