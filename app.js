// console.log("working")
// $('body').css('background', 'pink')


// NOTESSSSSSSSSS
// b25.val() = 0.1;
// b25.css("background", p1Color) 

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

let color = 'green';
let p1Color = 'red';
let p2Color = 'black';

let score = 0;
let p1Score = .1;
let p2Score = 1;

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
        score = p1Score
    }
    // odd p2
    else {
        color = p2Color;
        score = p2Score
    }
}
checkTurns()

// console.log(score)
// console.log(color)

let switchSpots = (sp1, sp2, sp3, sp4, sp5, sp6) => {

if($(sp6).css('background-color') == 'rgb(255, 255, 255)') {
    $(sp6).attr("value", score)
   $(sp6).css('background-color', color) 
}else if($(sp5).css('background-color')== 'rgb(255, 255, 255)'){
    $(sp5).attr("value", score)
    $(sp5).css('background-color', color) 
}
else if($(sp4).css('background-color')== 'rgb(255, 255, 255)'){
    $(sp4).attr("value", score)
    $(sp4).css('background-color', color) 

}else if($(sp3).css('background-color')== 'rgb(255, 255, 255)'){
    $(sp3).attr("value", score)
    $(sp3).css('background-color', color) 

}else if($(sp2).css('background-color')== 'rgb(255, 255, 255)'){
    $(sp2).attr("value", score)
    $(sp2).css('background-color', color) 
}else if($(sp1).css('background-color')== 'rgb(255, 255, 255)'){
    $(sp1).attr("value", score)
    $(sp1).css('background-color', color) 
}
else{
    turnsCounter++;
}
}






// b25.css("background", p1Color) 
// var back = $(box).css( "background-color" );
// console.log(back)
// }
// switchSpot(b25)
// switchSpot(b24)

// let switchSpots = (a) => {
//     let check6 = `".` + `${a}` + `.row1"`
    
//     console.log(check6)
//     console.log($("\"." `${check6}"`))
  
//    if( ){
//        console.log("okay")
//    }else if($(`.${a} .row1`).text() == "1" ){
//        console.log('one')
//    }
//    else{
//        console.log("try agian")
//    }

    // console.log('clicked')
    // console.log($(`.${a} .row2`).text())
    // console.log(parseInt($(`.${a} .row2`).val()))
// }
// console.log(b11.val())



// console.log(b11.attr('value'))
// var column1 = "column1"



// switchSpots(column1)
// if(b13.text() === b11.text()){
//     console.log('even')
// } else{
//     console.log("not")
// }

