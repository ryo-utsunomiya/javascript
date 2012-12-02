var Player = require('./player');

var World = function(){
  this._players = {};
  this.cnt = 0;
  this.FPS = 15;
};

World.prototype = {
  login: function(id){
    var player = new Player(id);
    this._players[id] = player;
    return player;
  },

  logout: function(id){
    delete this._players[id];
  },

  getPlayer: function(id){
    return this._players[id];
  },

  start: function(callback){
    var self = this;
    var mainloop = function(){
      self.cnt++;
      for(var id in self._players){
        var player = self._players[id];
        player.move()
      };
      // callback json data
      callback(self.toJson());
      setTimeout(mainloop, 1000/self.FPS);
    };
    mainloop();
  },

  toJson: function(){
    var objects = [];
    for(var id in this._players){
      var player = this._players[id];
      objects.push({
        x : player.x,
        y : player.y,
        id: player.id
      });
    };
    return {
      objects: objects
    };
  }
};

module.exports = World;
