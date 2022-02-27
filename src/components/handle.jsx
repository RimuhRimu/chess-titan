import highlighPiece from './highligh.jsx'

const Handle = (e,chessWhites,chessBlacks,turn,setTurn) => {
    const el = e.target
    const classes = el.classList
    let chessToMove;
    if (turn) {
        for (let i in chessWhites.WhitesState) {
            if (chessWhites.WhitesState[i].position === classes[0]) {
                chessToMove = chessWhites.WhitesState[i]
                highlighPiece(el,chessToMove,classes,turn,setTurn,chessWhites,chessBlacks)
                break
            }
        }
    }
    else {
       for(let i in chessBlacks.BlacksState){
            if(chessBlacks.BlacksState[i].position === classes[0]){
                chessToMove = chessBlacks.BlacksState[i]
                highlighPiece(el,chessToMove,classes,turn,setTurn,chessWhites,chessBlacks)
                break
            }
        } 
    }
       // try {
    // console.log(el)
       //     if (el.localName === 'path') {
       //         console.log(el.parentNode.parentNode.classList)
       //     }
       //     else if(el.localName === 'svg'){
       //         console.log(el.parentNode.classList)
       //     }
       //     else{
       //          console.log(el.classList)
       //     }
       // } catch (e) {
       //     console.log(e)
       // } 
};

export default Handle
