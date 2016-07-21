import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  fooService: Ember.inject.service('foo'),
  actions: {
    foo() {
      this.get('fooService').foo();
    }
  }
});
