import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { register } from 'ember-owner-test-utils/test-support/register';

const { Component } = Ember;

moduleForComponent('my-component', 'Integration | Register', {
  integration: true
});

test('allows the registration of components', function(assert) {
  assert.expect(1);

 register(this, 'template:components/my-component', hbs`<button class="do-it" {{ action 'foo' }}>GO!</button>`);

  register(this, 'component:my-component', Component.extend({
      actions: {
        foo() { assert.ok(true); }
      }
    })
  );

  this.render(hbs`{{my-component}}`);

  this.$('button').click();
});

