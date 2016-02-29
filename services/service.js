angular.module("Leaderboard")
.service("leaderService", function()
{
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




function SortByscore(x,y) {
      return ((x.score == y.score) ? 0 : ((y.score > x.score) ? 1 : -1 ));
    }



this.leaderboardFunc = function(startplek)
{
  people.sort(SortByscore);
  var plek= 20 *(startplek-2);
    for(var i=0;i<=20;i++)
    {
      console.log(plek + people[i].name + ' ' + people[i].score + '<br>');
      plek++;
    }


}

})
