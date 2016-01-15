import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  applyURL: DS.attr('string'),
  postedAt: DS.attr('date'),
  timestamp: DS.attr('number')
});
