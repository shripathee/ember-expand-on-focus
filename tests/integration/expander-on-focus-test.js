import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('Expander On Focus', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
   Ember.run(App, App.destroy);
  }
});

test('Is close on focus out working?', function(assert) {
  assert.expect(2);
  visit('/').then(function() {
   assert.equal(find('.expanded').length, 1, "Initial case - expanded");
   click('#title').then(function() {
     assert.equal(find('.expanded').length, 0, "Component closed on outside click");
   });
  });
});

test('Is force-shrink working?', function(assert) {
  assert.expect(2);
  visit('/').then(function() {
   assert.equal(find('.expanded').length, 1, "Initial case - expanded");
   click('.force-shrink').then(function() {
     assert.equal(find('.expanded').length, 0, "Component closed from within");
   });
  });
});
