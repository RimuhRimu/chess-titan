import triggerMovements from './movements.jsx'
import trigger from './trigger.jsx'
import $ from './document.jsx'
// import $ from './document.jsx'
// being realistic, debbug all :)

const highlighPiece = (el,piece,classes,turn,setTurn,whites,blacks) => {
    if (classes[1] === 'highligh') {
        trigger(el,piece,whites,blacks)
    }
    else if (classes[1] === 'active') {
       triggerMovements.tower(piece.position,whites,blacks)
       el.setAttribute('class',`${piece.position}`) 
    }
    else{
        if ($.querySelector('.active')) {
            triggerMovements.tower($.querySelector('.active').classList[0],whites,blacks)
            $.querySelector('.active').setAttribute('class',`${$.querySelector('.active').classList[0]}`)//debug here
        }
        triggerMovements.tower(piece.position,whites,blacks)
        el.setAttribute('class',`${piece.position} active`)//debbug here
        // let looking = 'type'
        // console.log(piece[looking])
    }
    // turn ? setTurn(false) : setTurn(true)
}
export default highlighPiece
