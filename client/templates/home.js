

Template.Home.onCreated(function() {
  console.log('Template.Home.onCreated');
  this.subscribe('projects');    
  this.subscribe('scores',"berkmancenter","twitter_followers");
});


Template.Home.helpers({
  reinos: "This is Reinhard",
  old_projects: function(){
    return [ {id: 'Project1' }, {id: 'Project2' }  ];
  },
  projects: function(){
    return Projects.find();
  },
  scores: function(){
    return Scores.find();
  }
});



