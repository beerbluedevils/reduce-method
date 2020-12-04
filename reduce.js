//reduce() 
const numbers = [ 1,2,3,4,5 ];
const multiply = numbers.reduce( (total , val) => total * val);
console.log(multiply); //120

const testScore = [ 8,,15,17,14,12 ];
const sumScore = testScore.reduce((totalScore , score) => totalScore + score , 67); 
//set inititalize number , 67 
//default start at 0
console.log(sumScore); //133 


//find max-min in the array
const num = [ 100,24,394,500,2,45,70 ];
const maxNum = num.reduce((max , n) => Math.max( max, n));
const minNum = num.reduce((min , n) => Math.min( min, n));
console.log(maxNum); //500
console.log(minNum); //2



//tallying
const voteScore = [ "yes" , "no", "no vote", "no", "no", "yes", "yes", "no vote", "no" ];
const counting = voteScore.reduce((count , value) => {
    if(count[value]){
        count[value]++;
    } else{
        count[value] = 1;
    } return count;
} , {}); //initialize with empty object
console.log(counting); //{ yes: 3, no: 4, 'no vote': 2 }

//short version
const counts = voteScore.reduce((score,value) => {
    score[value] = (score[value]||0) +1;
    return score;
} , {});
//console.log(counts); ////{ yes: 3, no: 4, 'no vote': 2 }


//with object
const movies = [
    { 
      title : "Old boy",
      rating : 8.4
    },
    { 
      title : "Call",
      rating : 7.2
    },
    { 
      title : "Star wars",
      rating : 7.4
    },
    { 
      title : "The nun",
      rating : 5.5
    },
    { 
      title : "Wrong turn",
      rating : 6.1 
    },
    { 
      title : "Sinister",
      rating : 6.8 
    },    
    { 
      title : "Parasite",
      rating : 8.6
    },
    { 
      title : "Mother",
      rating :  6.6
    }
];
const groupByScore = movies.reduce((group , rate) => {
    const key = Math.floor(rate.rating);
    if(!group[key]) group[key] = [];
        group[key].push(rate);
        return group;
} , {})
console.log(groupByScore);
//{
//    '5': [ { title: 'The nun', rating: 5.5 } ],
//    '6': [
//      { title: 'Wrong turn', rating: 6.1 },
//      { title: 'Sinister', rating: 6.8 },
//      { title: 'Mother', rating: 6.6 }
//    ],
//    '7': [
//      { title: 'Call', rating: 7.2 },
//      { title: 'Star wars', rating: 7.4 }
//    ],
//    '8': [
//      { title: 'Old boy', rating: 8.4 },
//      { title: 'Parasite', rating: 8.6 }
//    ]
//  }

