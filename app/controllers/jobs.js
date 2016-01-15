import Ember from 'ember';

// app/controllers/posts.js
export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishJob: function() {
      var newJob = this.store.createRecord('job', {
        title: this.get('title'),
        description: this.get('description'),
        location: this.get('location'),
        applyURL: this.get('applyURL'),
        date: new Date(),
        timestamp: new Date().getTime()
      });
      newJob.save();
    }
  }
});
