angular.module("Leaderboard")
.controller("mainLeaderboard", function($scope,leaderService){

leaderboardFunction = function()
{

  leaderService.leaderboardFunc(3);

}

})
