
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
         value_tag.push(("hacker+++".concat(i.toString()))); 
    }
    for(i =0; i<5; i++) {
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
if(localStorage.getItem('hacker+++1') != '10000') {
    document.querySelector("#best_timing p").innerHTML = localStorage.getItem('hacker+++1');
}
else{
    document.querySelector("#best_timing p").innerHTML = '0';
}


for (var i = 1; i < 51; i++) {
    initial_numbers.push(i.toString());
}

//funtion to keep count for time
function timer()    {
    var time_diff = new Date().getTime() - ini_time;
    actual_time = (time_diff%10000000) / 1000;     //calculate the time in doing the puzzle
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

var key = 1;
function gameStart() {     //for countdown and then start the game
    if(key ==1 ) {
    if (initial_numbers.length != 0) {
        var box_cover = document.querySelector("#cover");
        var num =7;
        display_n_go();
        function display_n_go( ) {
            box_cover.innerHTML =  num--;
            if(num == -1) {
                box_cover.innerHTML = ' ';
               box_cover.style.zIndex = -5;
                ini_time = new Date().getTime();
                timer();    //will end with timer ending after the game is finished, actual time will have game time
                return;
            }
            setTimeout( display_n_go, 1000);
        }
        
    }
    else  {
        location.reload();
    } key = 0 }
}

function gameEnd() {   //bring back #cover to top, display score, update high score
    var x = document.querySelector("#cover");
    x.innerHTML = "Your time is " + actual_time.toString() + "<br> Restart";
    highscore(actual_time.toString());
    x.style.zIndex = 3;
    key = 1;
}

let number_counting = initial_numbers.slice(0,25);  //fo keep track of each value of the box
let box_counting = [];     //to keep track of the boxes containing the numbers
let box_tag = [];        //tag to map each tag to its respective number
let k;

for (var i = 0; i  < 25; i++) {
    box_counting.push('box_');
    box_counting[i] = box_counting[i].concat(initial_numbers[i]);
}

shuffle(number_counting);  //to shuffle the number order


for( i=0; i<25; i++)  {
    box_tag[i] = document.querySelector('.' + box_counting[i]);     //mapping each tag to a box element
    box_tag[i].innerHTML= number_counting[i];      //assigns a value i to the i-th box
} 

function clickMe(x) {
    if(box_tag[x-1].textContent == initial_numbers[0]) {
        if(initial_numbers[0] < 26) {
            box_tag[x-1].innerHTML =Number(initial_numbers[0]) + 25;
        }
        else    {
            box_tag[x-1].innerHTML = " "; 
        }
        initial_numbers.shift();
    }
}
