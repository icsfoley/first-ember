import { module, test } from 'qunit';
import { setupTest } from 'first-ember/tests/helpers';

module('Unit | Route | wello', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:wello');
    assert.ok(route);
  });
});
