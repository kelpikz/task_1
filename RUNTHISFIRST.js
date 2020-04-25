var normal_tag = [];
var hard_tag = [];
var hacker_tag = [];


for(var i=0; i<5; i++)  {
    normal_tag[i] = i+1 ;
    hard_tag[i] = 'hard'.concat((i+1).toString());
    hacker_tag[i] = 'hacker+++'.concat((i+1).toString());
}

for(i=0; i<5; i++)  {
    localStorage.setItem(normal_tag[i], '1000');
    localStorage.setItem(hard_tag[i], '10000');
    localStorage.setItem(hacker_tag[i], '10000');
}