angular.module("Leaderboard")
.service("leaderService", function()
{




function SortByscore(x,y) {
      return ((x.score == y.score) ? 0 : ((y.score > x.score) ? 1 : -1 ));
    }




this.leaderboardFunc = function(startplek,people,currentplace)
{
  var plek= 20 *(startplek-2);
  people.sort(SortByscore);

  var body = document.querySelector('body');
  var table= document.createElement('table');
  var tr = document.createElement('tr');
  var tablehead1= document.createElement('th');
  var tablehead2= document.createElement('th');
  var tablehead3= document.createElement('th');
  tablehead1.innerHTML="Plek";
  tablehead2.innerHTML="Naam";
  tablehead3.innerHTML="Score";
  tr.appendChild(tablehead1);
  tr.appendChild(tablehead2);
  tr.appendChild(tablehead3);
  table.appendChild(tr);


    for(var i=0;i<=20;i++)
  {
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      if( plek == currentplace)
      {
        td1.style.background="Yellow";
        td2.style.background="Yellow";
        td3.style.background="Yellow";
      }
      td1.innerHTML=plek++;
      td2.innerHTML=people[i].name;
      td3.innerHTML=people[i].score;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      td1.style.border="1px solid black";
      td2.style.border="1px solid black";
      td3.style.border="1px solid black";
    table.appendChild(tr);

    }
    table.style.border="5px solid black";
body.appendChild(table);




}

})
