import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import { register } from 'ember-owner-test-utils/test-support/register';

const { Service } = Ember;

moduleFor('controller:thing', 'Unit | Register');

test('allows use of register in unit tests', function(assert) {
  assert.expect(1);
  let controller = this.subject();

  register(this, 'service:foo', Service.extend({
      foo() {
        assert.ok(true);
      }
    })
  );

  controller.send('foo');
});

