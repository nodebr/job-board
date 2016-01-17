import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('jobs');
  this.route('new');
  this.route('view', { path: '/:job_id' });
});

export default Router;
