import letters from './letters.jsx'
import $ from './document.jsx'
const clean = (whites,blacks) => {
    for(let i in whites.WhitesState)  {
        $.querySelector(`.${whites.WhitesState[i].position}`).setAttribute('class',`${whites.WhitesState[i].position}`)
        $.querySelector(`.${blacks.BlacksState[i].position}`).setAttribute('class',`${blacks.BlacksState[i].position}`)
    }-
};
const highlighMovements = {
    tower: (pos,whites,blacks) => {
       for (let i = 1, len = 8; i <= len; i++) {
           const locLetter = $.querySelector(`.${pos.slice(0,1)}${i}`); // begins in 1 cause we are finding div with class integers
           const locNumber = $.querySelector(`.${letters[i-1]}${pos.slice(1)}`); //shrink 1 and begins with 0 to find in array the correct letter
           const arrLocLetter = locLetter.className.split(' ');
           const arrLocNumber = locNumber.className.split(' ');
           if(arrLocLetter[1] !== 'highligh') {
            locLetter.setAttribute('class',`${locLetter.className} highligh`)
           }
           else{
            locLetter.setAttribute('class',`${arrLocLetter[0]}`)
           }
           if(arrLocNumber[1] !== 'highligh') {
            locNumber.setAttribute('class',`${locNumber.className} highligh`)
           }
           else{
            locNumber.setAttribute('class',`${arrLocNumber[0]}`)
           }
           // console.log((() => whites.WhitesState[i].position !== arrLocLetter[0] || blacks.BlacksState[i].position !== arrLocLetter[0])())
       }
        clean(whites,blacks)
    },
    knight: (pos) => {
        console.log('happy coding :)') 
    }
}
export default highlighMovements
