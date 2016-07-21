import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  barService: Ember.inject.service('bar'),
  actions: {
    bar() {
      this.get('barService').bar();
    }
  }
});
