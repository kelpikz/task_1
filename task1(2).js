
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



function highscore(score) {
    var  value_tag = [];
    var i,j;
    for( i=1; i<6; i++) {
         value_tag.push(i.toString()); 
    }
    for(i =0; i<5; i++) {
        console.log(localStorage.getItem(value_tag[i]) + "    "  +  score);
        if (score < parseInt(localStorage.getItem(value_tag[i]))) {
            for(j=5; j > i; j--) { 
                localStorage.setItem(value_tag[j], localStorage.getItem(value_tag[j-1]));
                console.log(localStorage.getItem(value_tag[j]) + "    "  +  value_tag[j-1]);

            }
            localStorage.setItem(value_tag[i], score);
            break;
        }
    }

}

var initial_numbers = [];
var actual_time;
var ini_time;

if(localStorage.getItem('1') != '1000') {
    document.querySelector("#best_timing p").innerHTML = localStorage.getItem('1');
}
else{
    document.querySelector("#best_timing p").innerHTML = '0';
}


for (var i = 1; i < 41; i++) {
    initial_numbers.push(i.toString());
}

//funtion to keep count for time
function timer()    {
    var time_diff = new Date().getTime() - ini_time;
    actual_time = (time_diff%1000000) / 1000;     //calculate the time in doing the puzzle
    document.querySelector("#your_timing p").innerHTML = actual_time;
    
    if(initial_numbers.length == 0) {
        gameEnd();
        return;      
    }
    setTimeout(timer, 50);
}

function newGame() {     //to start a new game
    location.reload();
}

function gameStart() {     //for countdown and then start the game
    if (initial_numbers.length != 0) {
        var box_cover = document.querySelector("#cover");
        var num =3;
        display_n_go();
        function display_n_go( ) {
            box_cover.innerHTML =  num--;
            if(num == -1) {
                box_cover.innerHTML = ' ';
               box_cover.style.zIndex = -1;
                ini_time = new Date().getTime();
                timer();    //will end with timer ending after the game is finished, actual time will have game time
                return;
            }
            setTimeout( display_n_go, 1000);
        }
        
    }
    else  {
        location.reload();
    }
}

function gameEnd() {   //bring back #cover to top, display score, update high score
    var x = document.querySelector("#cover");
    x.innerHTML = "Your time is " + actual_time.toString() + "<br> Restart";
    highscore(actual_time.toString());
    x.style.zIndex = 1;
}

let number_counting = initial_numbers.slice(0,20);  //fo keep track of each valuse of the box
let box_counting = [];     //to keep track of the boxes containing the numbers
let box_tag =[];        //tag to map each tag to its respective number
let k;

for (i = 0; i  < 20; i++) {
    box_counting.push('box');
    box_counting[i] = box_counting[i].concat(initial_numbers[i]);
}

shuffle(number_counting);  //to shuffle the number order


for( i=0; i<20; i++)  {
    box_tag[i] = document.querySelector('.' + box_counting[i]);     //mapping each tag to a box element
    box_tag[i].innerHTML= number_counting[i];      //assigns a value i to the i-th box
} 

function clickMe(x) {

    if(box_tag[x-1].textContent == initial_numbers[0]) {
        if(initial_numbers[0] < 21) {
            box_tag[x-1].innerHTML =Number(initial_numbers[0]) + 20;
        }
        else    {
            box_tag[x-1].innerHTML = " "; 
        }
        initial_numbers.shift();
    }
}
