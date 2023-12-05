const players = [{
    id:1,
    name:"Virat",
    score:112
},
{
    id:2,
    name:"Babar",
    score:102
},{
    id:3,
    name:"Root",
    score:100
},{
    id:4,
    name:"Williamson",
    score:101
},{
    id:5,
    name:"Smith",
    score:109
}];


//top3 players leaderboard
players.sort((item1, item2)=>{
return item2.score - item1.score;
});

const top3 = players.slice(0,3);
console.log("============TOP 3=================")
console.log(top3);
