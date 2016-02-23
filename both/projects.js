Project = function(doc) {
  return _.extend(this, doc);
};

_.extend(Project.prototype, {

});

Projects = new Mongo.Collection('projects', {
  transform: function(doc) { return new Project(doc); }
});

Projects.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 255,
    optional: false
  }
}));
