Project = function(doc) {
  return _.extend(this, doc);
};

_.extend(Project.prototype, {

});

Projects = new Mongo.Collection('projects', {
  transform: function(doc) { return new Project(doc); }
});

var ProjectSchema = new SimpleSchema({
  title: {
    type: String,
    max: 255,
    label: 'Human-friendly title',
    optional: false
  },
  id: {
    type: String,
    max: 255,
    label: 'Unique identifier for project',
    optional: false
  },
  twitter: {
    type: String,
    max: 15,
    label: 'Twitter handle',
    optional: true
  }
});

Projects.attachSchema(ProjectSchema);

