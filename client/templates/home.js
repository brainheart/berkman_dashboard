

Template.Home.onCreated(function() {
  console.log('Template.Home.onCreated');
  this.subscribe('projects');    
  this.subscribe('scores');
});


Template.Home.helpers({
  reinos: "This is Reinhard",
  projects: function(){
    return Projects.find();
  },
  scores: function(){
    return Scores.find();
  }
});





Template.Home.onRendered(function() {
  
  var template = this;
  
  console.log("Template.Home.onRendered");
  
  this.autorun(function() {

    if (!template.subscriptionsReady()) {
      return;
    }    

    var plotScores = function plotScores(project){
      console.log('plotScores for project ', project);
      var scores = [];
      Scores.find({project:project.id}).forEach(function(s){
        console.log("here is somthing for ya: " , s);
        scores.push(s);//{ date: s.date, value:  s.value });
        console.log("here is what it turns into: ", scores[-1]);
      });
      console.log("Hi Reinhard. You've almost figured your yesterday right thing out.");
      MG.data_graphic({
        title: "Downloads",
        description: "This graphic shows a time-series of downloads.",
        data: scores,
        width: '600',
        height: 255,
        target: '#twitter_'+project.id,
        x_accessor: 'date',
        y_accessor: 'value',
        min_y_from_data: true
      });
    };
    
    Projects.find().forEach(function(project){
      console.log('examining project ' , project);
      plotScores(project);
    });

  });
});
