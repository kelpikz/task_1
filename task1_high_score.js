
var score  = [];
var normal_tag = [];
var hard_tag = [];
var hacker_tag = [];


for(var i=0; i<5; i++)  {
    score[i] = 'hs'.concat((i+1).toString());
    normal_tag[i] = i+1 ;
    hard_tag[i] = 'hard'.concat((i+1).toString());
    hacker_tag[i] = 'hacker+++'.concat((i+1).toString());
}

for(i=0; i<5; i++)  {
    if(localStorage.getItem(normal_tag[i]) == '1000')   {
         document.querySelector('#'+score[i]).innerHTML = '0';
    }
    else { 
        document.querySelector('#'+score[i]).innerHTML = localStorage.getItem(normal_tag[i]);
}
}

function normal() {
    for(i=0; i<5; i++)  {
        if(localStorage.getItem(normal_tag[i]) == '1000')   {
             document.querySelector('#'+score[i]).innerHTML = '0';
        }
        else { 
            document.querySelector('#'+score[i]).innerHTML = localStorage.getItem(normal_tag[i]);
    }
    }
}

function hard() {
    for(i=0; i<5; i++)  {
        if(localStorage.getItem(hard_tag[i]) == '10000')   {
             document.querySelector('#'+score[i]).innerHTML = '0';
        }
        else { 
            document.querySelector('#'+score[i]).innerHTML = localStorage.getItem(hard_tag[i]);
    }
    }
}

function hacker() {
    for(i=0; i<5; i++)  {
        if(localStorage.getItem(hacker_tag[i]) == '10000')   {
             document.querySelector('#'+score[i]).innerHTML = '0';
        }
        else { 
            document.querySelector('#'+score[i]).innerHTML = localStorage.getItem(hacker_tag[i]);
    }
    }
}