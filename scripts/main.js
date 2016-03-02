angular.module("Leaderboard")
.controller("mainLeaderboard", function($scope,leaderService){
  var people = [
   {name:'Casey',score:'500'},
   {name:'Rob',score:'700'},
   {name:'Roel',score:'605'},
   {name:'Roy',score:'506'},
   {name:'Alicia',score:'705'},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
   {name:'Roel',score:"400"},
]

leaderboardFunction = function()
{

  leaderService.leaderboardFunc(3,people,40);

}

})
