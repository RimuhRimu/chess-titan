import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Blacks = (entries) => {
    const [BlacksState,setBlacks] = useState({
        towerR: {
            type:'tower',
            fired:false,
            chess: 'blacks',
            position:'h1',
            icon: <FontAwesomeIcon icon='chess-rook'size='3x' className='blacks' />
        },
        towerL: {
            type:'tower',
            fired:false,
            chess: 'blacks',
            position:'h8',
            icon: <FontAwesomeIcon icon='chess-rook'size='3x' className='blacks' />
        },
        horseR:{
            type:'horse',
            fired:false,
            chess: 'blacks',
            position:'h2',
            icon: <FontAwesomeIcon icon='chess-knight'size='3x' className='blacks' />
        },
        horseL:{
            type:'horse',
            fired:false,
            chess: 'blacks',
            position:'h7',
            icon: <FontAwesomeIcon icon='chess-knight'size='3x' className='blacks' />
        },
        bishopR:{
            type:'bishop',
            fired:false,
            chess: 'blacks',
            position:'h3',
            icon: <FontAwesomeIcon icon='chess-bishop'size='3x' className='blacks' />
        },
        bishopL:{
            type:'bishop',
            fired:false,
            chess: 'blacks',
            position:'h6',
            icon: <FontAwesomeIcon icon='chess-bishop'size='3x' className='blacks' />
        },
        king:{
            type:'king',
            fired:false,
            chess: 'blacks',
            position:'h4',
            icon: <FontAwesomeIcon icon='chess-king'size='3x' className='blacks' />
        },
        queen:{
            type:'queen',
            fired:false,
            chess: 'blacks',
            position:'h5',
            icon: <FontAwesomeIcon icon='chess-queen'size='3x' className='blacks' />
        },
        pawn1:{
            type:'pawn',
            fired:false,
            chess: 'blacks',
            position:'g1',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
        pawn2:{
            type:'pawn',
            fired:false,
            chess: 'blacks',
            position:'g2',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
        pawn3:{
            type:'pawn',
            fired:false,
            chess: 'blacks',
            position:'g3',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
        pawn4:{
            type:'pawn',
            fired:false,
            chess: 'blacks',
            position:'g4',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
        pawn5:{
            type:'pawn',
            fired:false,
            chess: 'blacks',
            position:'g5',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
        pawn6:{
            type:'pawn',
            fired:false,
            chess: 'blacks',
            position:'g6',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
        pawn7:{
            type:'pawn',
            fired:false,
            chess: 'blacks',
            position:'g7',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
        pawn8:{
            type:'pawn',
            fired:false,
            chess: 'blacks',           
            position:'g8',
            icon: <FontAwesomeIcon icon='chess-pawn'size='3x' className='blacks' />
        },
    })
    return {
        BlacksState,setBlacks
    }
}

export default Blacks
