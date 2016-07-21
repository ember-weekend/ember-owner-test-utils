import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Ember from 'ember';

import { register } from 'ember-owner-test-utils/test-support/register';

const { Service } = Ember;

moduleForAcceptance('Acceptance | main');

test('allows the overriding of non-existant registrations', function(assert) {
  assert.expect(1);

  register(this, 'service:foo', Service.extend({
      foo() {
        assert.ok(true);
      }
    })
  );

  visit('/thing');
  click('.my-button');
});

test('allows the overriding of existing registrations', function(assert) {
  assert.expect(1);

  register(this, 'service:bar', Service.extend({
      bar() {
        assert.ok(true);
      }
    })
  );

  visit('/existing-service-test');
  click('.existing-service');
});
