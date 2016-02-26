

Meteor.publish('scores', function() {
  return Scores.find();
  //var selector = {metric: metric};
  //var options  = {fields: {project: 1, metric: 1,date: 1, value: 1} };
  //var docs = Scores.find(selector,options);
  //return docs;
});

Meteor.publish("projects", function(){
  return Projects.find();
});

Meteor.publish('histograms', function(project,metric,granularity) {
  var selector = {project:project, metric: metric, granularity:granularity};
  var options  = {fields: {start_date: 1, values: 1} };
  var docs = Histograms.find(selector,options);
  return docs;
});
