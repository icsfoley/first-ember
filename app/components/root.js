import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class RootComponent extends Component {

  @tracked state = [{count: 0}];

  @action
  handleClick () {
    this.state[0].count += 1;
    this.state = this.state;
  }

  get count () {
    return this.state[0].count;
  }
}
