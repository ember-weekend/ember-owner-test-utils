# Ember Owner Test Utils

[![Build Status](https://travis-ci.org/rondale-sc/ember-owner-test-utils.svg?branch=master)](https://travis-ci.org/rondale-sc/ember-owner-test-utils)

This is an addon that is intended to provide an easy mechanism to access and override Ember owner APIs.

# Installation

`ember install ember-owner-test-utils`

# Usage

## Register

I find this is most useful for dealin with services that hit the network.  It allows you to declaratively specify what a given registration is responsible for inside the test file itself.

At the top of your `acceptance|integration|unit` test import the `register` helper with the following line:

```js
import { register } from 'ember-owner-test-utils/test-support/register';
```

Then from within any place that has a test context (ie inside a `beforeEach` or `test`) you may set a new registration with the following:

```js
test('it calls foo on the foo service', function(assert){
  assert.expect(1);

  register(this, 'service:foo', Ember.Service.extend({
    foo() {
      assert.ok(true);
    }
  }));

  visit('/thing');
  click('.foo-button-that-triggers-expected-service');
});
```

This signature can be used in all forms of Ember tests.
