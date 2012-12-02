enchant();
var socket = io.connect();
var createEnchantedWindow = function() {
  window.game = new Game(320, 320);
  game.FPS = 3;
  game.preload("chara1.png");

  game.players = {};
  game.addPlayer = function(id){
    bear = new Sprite(32, 32);
    bear.image = game.assets["chara1.png"];
    game.players[id] = bear;
    game.rootScene.addChild(bear);
  };

  var last_input = { left: false, up: false, right: false, down: false};
  game.rootScene.addEventListener("enterframe",function(){
    for (var key in game.input){
      var isPushed = game.input[key];
      if(last_input[key] !== isPushed)
        socket.emit('key', {key: key, state: isPushed});
      last_input[key] = game.input[key];
    }
  });
  game.start();
};

$(function() {
  createEnchantedWindow();

  socket.on('update', function(worldState) {
    for(var id in worldState.players){
      var player = game.players[id];
      if(!player){
        game.addPlayer(id);
      } else {
        var playerData = worldState.players[id];
        player.x = playerData.x;
        player.y = playerData.y;
      }
    };
  });
});

