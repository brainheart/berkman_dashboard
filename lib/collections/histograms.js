Histogram = function(doc) {
  return _.extend(this, doc);
};

_.extend(Histogram.prototype, {

});

Histograms = new Mongo.Collection('histograms', {
  transform: function(doc) { return new Histogram(doc); }
});

var HistogramSchema = new SimpleSchema({
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
  start_date: {
    type: Date,
    optional: false
  },
  values : {
    type: Number,
    optional: false
  },
  granularity: {
    type: String,
    regEx: /hour|day|month|year|financial_year/,
    optional: false
  }
});

Histograms.attachSchema(HistogramSchema);

