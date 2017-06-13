
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('answer-rating', 'helper:answer-rating', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{answer-rating inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

