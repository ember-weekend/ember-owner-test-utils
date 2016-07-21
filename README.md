# Ember Owner Test Utils

[![Build Status](https://travis-ci.org/rondale-sc/ember-owner-test-utils.svg?branch=master)](https://travis-ci.org/rondale-sc/ember-owner-test-utils)
[![Ember Observer Score](https://emberobserver.com/badges/ember-owner-test-utils.svg)](https://emberobserver.com/addons/ember-owner-test-utils)

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

## Playing Make Believe

You can even use it to make a registration on a component that never existed.  Like so:

```js
// See here for more of the test:
// https://github.com/rondale-sc/ember-owner-test-utils/blob/master/tests/integration/my-component-test.js
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
```

Hat tip (🎩) to [ember-route-action-helper](https://github.com/DockYard/ember-route-action-helper) on this one.  This is very useful for testing complex interactions without needing to create unnecessary files in your addon's dummy folder.

### Thanks

Special thanks to @rwjblue for help with 1.13.13 support.  Was a difficult thing to track down.  :beers:  If you'd like to hear @cowboyd and myself talk about this in more depth you can check it out at this episode of ember weekend:

[Ember Weekend: Bug Integrat](https://emberweekend.com/episodes/bug-integrat)
