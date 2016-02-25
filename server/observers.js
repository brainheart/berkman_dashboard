
Meteor.startup(function () {
  // code to run on server at startup

  console.log("Restarting****************************************");
  
  var Twit = Meteor.npmRequire('twit');

  var T = new Twit(Meteor.settings.twitter_api);

  var projects = Meteor.settings.projects;

  // insert projects from settings into mongo.

  if ( projects.length > 0 ) {
    Projects.remove({});
  }
  
  _.each(projects,function(p){
    Projects.insert(p);
  });

  // insert twitter score.

  Projects.find().forEach(function(p){
    T.get('users/show',
          { screen_name: p.twitter },
           Meteor.bindEnvironment(function (err, data, response) {
            var score = {
              project: p.id,
              metric: 'twitter_followers',
              date: Date.now()
            };
            score.value = data.followers_count;
            console.log("score");
            console.log(score);
            Scores.insert(score);
          })
         )});
  console.log("scores");

  //console.log(scores);
  //_.each(scores,function(s){
  //  console.log("inserting score...");
  //  Scores.insert(s);
  //});
    
});
