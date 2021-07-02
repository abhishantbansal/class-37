class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef  = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        playerCount = playerCount+1;
        player.update(playerCount);
      }
      form = new Form()
      form.display();
    }
  }
}
