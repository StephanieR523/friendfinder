var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    var user = req.body;
//Scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    var friendScore = 0;
    var friendScore2 = 35;

   
    for(var i = 0; i < friends.length; i++) {
      var friendScore3 = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        friendScore3 += difference;
      }

      if(friendScore3 < friendScore2) {
        friendScore = i;
        friendScore2 = friendScore3;
      }
    }

   
    friends.push(user);

    res.json(friends[friendScore]);
  });
};