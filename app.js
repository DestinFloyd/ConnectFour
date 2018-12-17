// console.log("working")
// $('body').css('background', 'pink')

// all boxes on board
let b11 = $('.column1 .row1')
let b12 = $('.column1 .row2')
let b13 = $('.column1 .row3')
let b14 = $('.column1 .row4')
let b15 = $('.column1 .row5')
let b16 = $('.column1 .row6')

let b21 = $('.column2 .row1')
let b22 = $('.column2 .row2')
let b23 = $('.column2 .row3')
let b24 = $('.column2 .row4')
let b25 = $('.column2 .row5')
let b26 = $('.column2 .row6')

let b31 = $('.column3 .row1')
let b32 = $('.column3 .row2')
let b33 = $('.column3 .row3')
let b34 = $('.column3 .row4')
let b35 = $('.column3 .row5')
let b36 = $('.column3 .row6')

let b41 = $('.column4 .row1')
let b42 = $('.column4 .row2')
let b43 = $('.column4 .row3')
let b44 = $('.column4 .row4')
let b45 = $('.column4 .row5')
let b46 = $('.column4 .row6')

let b51 = $('.column5 .row1')
let b52 = $('.column5 .row2')
let b53 = $('.column5 .row3')
let b54 = $('.column5 .row4')
let b55 = $('.column5 .row5')
let b56 = $('.column5 .row6')

let b61 = $('.column6 .row1')
let b62 = $('.column6 .row2')
let b63 = $('.column6 .row3')
let b64 = $('.column6 .row4')
let b65 = $('.column6 .row5')
let b66 = $('.column6 .row6')

let b71 = $('.column7 .row1')
let b72 = $('.column7 .row2')
let b73 = $('.column7 .row3')
let b74 = $('.column7 .row4')
let b75 = $('.column7 .row5')
let b76 = $('.column7 .row6')

// colors for players
let color = 'white';
let p1Color = 'red';
let p2Color = 'black';

// default score box and p1/p2 values for tracking which squares are checked
let score = 0;
const p1Score = .1;
const p2Score = 1;

let turnsCounter = 0;

// score board tracker vars
let numOfWins1 = 0
let numOfWins2 = 0

// array holding mini 4 spot arrays of all winning positions.
const wins = [[b11, b21, b31, b41], [b12, b22, b32, b42], [b13, b23, b33, b43], [b14, b24, b34, b44], [b15, b25, b35, b45], [b16, b26, b36, b46], [b21, b31, b41, b51], [b22, b32, b42, b52], [b23, b33, b43, b53], [b24, b34, b44, b54], [b25, b35, b45, b55], [b26, b36, b46, b56], [b31, b41, b51, b61], [b32, b42, b52, b62], [b33, b43, b53, b63], [b34, b44, b54, b64], [b35, b45, b55, b65], [b36, b46, b56, b66], [b41, b51, b61, b71], [b42, b52, b62, b72], [b43, b53, b63, b73], [b44, b54, b64, b74], [b45, b55, b65, b75], [b46, b56, b66, b76], [b11, b12, b13, b14], [b21, b22, b23, b24], [b31, b32, b33, b34], [b41, b42, b43, b44], [b51, b52, b53, b54], [b61, b62, b63, b64], [b71, b72, b73, b74], [b12, b13, b14, b15], [b22, b23, b24, b25], [b32, b33, b34, b35], [b42, b43, b44, b45], [b52, b53, b54, b55], [b62, b63, b64, b65], [b72, b73, b74, b75], [b13, b14, b15, b16], [b23, b24, b25, b26], [b33, b34, b35, b36], [b43, b44, b45, b46], [b53, b54, b55, b56], [b63, b64, b65, b66], [b73, b74, b75, b76], [b16, b25, b34, b43], [b26, b35, b44, b53], [b36, b45, b54, b63], [b46, b55, b64, b73], [b46, b35, b24, b13], [b56, b45, b34, b23], [b66, b55, b44, b33], [b76, b65, b54, b43], [b15, b24, b33, b42], [b25, b34, b43, b52], [b35, b44, b53, b62], [b45, b54, b63, b72], [b45, b34, b23, b12], [b55, b44, b33, b22], [b65, b54, b43, b32], [b75, b64, b53, b42], [b14, b23, b32, b41], [b24, b33, b42, b51], [b34, b43, b52, b61], [b44, b53, b62, b71], [b44, b33, b22, b11], [b54, b43, b32, b21], [b64, b53, b42, b31], [b74, b63, b52, b41]]



const checkTurns = () => {
    turnsCounter++;
    // even p1
    if (turnsCounter % 2 == 0) {
        color = p1Color;
        score = p1Score
    }
    // odd p2
    else {
        color = p2Color;
        score = p2Score
    }
}


// console.log(score)
// console.log(color)

const switchSpots = (sp1, sp2, sp3, sp4, sp5, sp6) => {

    if ($(sp6).css('background-color') == 'rgb(255, 255, 255)') {
        $(sp6).attr("value", score)
        $(sp6).css('background-color', color)
    } else if ($(sp5).css('background-color') == 'rgb(255, 255, 255)') {
        $(sp5).attr("value", score)
        $(sp5).css('background-color', color)
    }
    else if ($(sp4).css('background-color') == 'rgb(255, 255, 255)') {
        $(sp4).attr("value", score)
        $(sp4).css('background-color', color)

    } else if ($(sp3).css('background-color') == 'rgb(255, 255, 255)') {
        $(sp3).attr("value", score)
        $(sp3).css('background-color', color)

    } else if ($(sp2).css('background-color') == 'rgb(255, 255, 255)') {
        $(sp2).attr("value", score)
        $(sp2).css('background-color', color)
    } else if ($(sp1).css('background-color') == 'rgb(255, 255, 255)') {
        $(sp1).attr("value", score)
        $(sp1).css('background-color', color)
    }
    else {
        turnsCounter++;
    }
}



const checkForWins = () => {
    for (let counter = 0; counter < wins.length; counter++) {
        let piece = wins[counter]

        let piecesValue = Number(piece[0].attr('value')) + Number(piece[1].attr('value')) + Number(piece[2].attr('value')) + Number(piece[3].attr('value'))
        if (piecesValue == 0.4) {
            console.log("player1 wins!")
            reset()
            turnsCounter = 0
            numOfWins1 ++
            $(".p1score").text(numOfWins1)

        }
        else if (piecesValue == 4) {
            console.log("player2 wins!")
            reset()
            turnsCounter = 0
            numOfWins2 ++
            $(".p2score").text(numOfWins2)

        }

    }
}

const boxes = [b11, b12, b13, b14, b15, b16, b21, b22, b23, b24, b25, b26, b31, b32, b33, b34, b35, b36, b41, b42, b43, b44, b45, b46, b51, b52, b53, b54, b55, b56, b61, b62, b63, b64, b65, b66, b71, b72, b73, b74, b75, b76]

const reset = () => {
    for(let i =0; i < boxes.length; i ++){
        $(boxes[i]).css('background-color', 'white') 
        $(boxes[i]).attr('value', 0)
    }
}

$('#letsPlay').click(function(event){
    event.preventDefault();
    reset()
    $(".p1").text($('#inputName1').val())
    $(".p2").text($('#inputName2').val())
    p1Color = $("#inputColor1").val()
    p2Color =  $("#inputColor2").val()
  });

//   <input type="text" placeholder="Player1" id="inputName1">

//   <input type="text" placeholder="Player2" id="inputName2">
//   <input type="text" placeholder="Player1's color" id="inputColor1">

//   <input type="text" placeholder="Player2's color" id="inputColor2">
//   <button id="letsPlay">Let's Play</button>

// <div class="p1">
// player1 
// <div class="p1score"></div>
// </div>
// <div class="p2">
// player2
// <div class="p2score"></div>
// </div>