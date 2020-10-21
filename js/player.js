class Player {
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    }
   getCount() {
var pRef=database.ref("playerCount");
pRef.on("value",(data)=>{
    playerCount=data.val();
})
   }

  updateCount() {
      database.ref("/").update({
          playerCount:count
      })
  }

  update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({

        name:this.name,
        distance:this.distance
    })
  }

  static getPlayerInfo(){
      var playerInfo=database.ref("players");
      playerInfo.on("value",(data)=>{
          allPlayers=data.val();
      })
  }
}