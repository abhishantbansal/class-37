class Player{
constructor(){}
getCount(){
    var playerCountRef  =  database.ref('playerCount');
    playerCountRef.on("value",function(data){
       playerCount = data.val();
    })
   
  }

  update(Count){
    database.ref('/').update({
      playerCount: Count
    });
  }
}
