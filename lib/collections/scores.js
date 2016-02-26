Score = function(doc) {
  return _.extend(this, doc);
};

_.extend(Score.prototype, {

});

Scores = new Mongo.Collection('scores', {
  transform: function(doc) { return new Score(doc); }
});

var ScoreSchema = new SimpleSchema({
  project: {
    type: String,
    max: 255,
    optional: false
  },
  metric: {
    type: String,
    max: 255,
    optional: false
  },
  date: {
    type: Date,
    optional: false
  },
  value : {
    type: Number,
    optional: false
  }
});

Scores.attachSchema(ScoreSchema);

