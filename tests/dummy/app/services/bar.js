import Ember from 'ember';

const { Service } = Ember;

export default Service.extend({
  bar() {
    throw new Error("This shouldn't be called in test");
  }
});
