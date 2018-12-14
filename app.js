// console.log("working")
// $('body').css('background', 'pink')
let b11 = $('.column1 .row1').val()
let b12 = $('.column1 .row2').val()
let b13 = $('.column1 .row3').val()
let b14 = $('.column1 .row4').val()
let b15 = $('.column1 .row5').val()
let b16 = $('.column1 .row6').val()

let b21 = $('.column2 .row1').val()
let b22 = $('.column2 .row2').val()
let b23 = $('.column2 .row3').val()
let b24 = $('.column2 .row4').val()
let b25 = $('.column2 .row5').val()
let b26 = $('.column2 .row6').val()

let b31 = $('.column3 .row1').val()
let b32 = $('.column3 .row2').val()
let b33 = $('.column3 .row3').val()
let b34 = $('.column3 .row4').val()
let b35 = $('.column3 .row5').val()
let b36 = $('.column3 .row6').val()

let b41 = $('.column4 .row1').val()
let b42 = $('.column4 .row2').val()
let b43 = $('.column4 .row3').val()
let b44 = $('.column4 .row4').val()
let b45 = $('.column4 .row5').val()
let b46 = $('.column4 .row6').val()

let b51 = $('.column5 .row1').val()
let b52 = $('.column5 .row2').val()
let b53 = $('.column5 .row3').val()
let b54 = $('.column5 .row4').val()
let b55 = $('.column5 .row5').val()
let b56 = $('.column5 .row6').val()

let b61 = $('.column6 .row1').val()
let b62 = $('.column6 .row2').val()
let b63 = $('.column6 .row3').val()
let b64 = $('.column6 .row4').val()
let b65 = $('.column6 .row5').val()
let b66 = $('.column6 .row6').val()

let color = 'white';
let p1Color = 'red';
let p2Color = 'black';

let turnsCounter = 0;

const wins = {
hor: [],
vert: [],
diag: []
}

let checkTurns = () => {
    turnsCounter ++;
    // even p1
    if(turnsCounter % 2 == 0){
        color = p1Color;
    }
    // odd p2
    else {
        color = p2Color;
    }
}


