import Route from '@ember/routing/route';

export default class SomethingRoute extends Route {
  async beforeModel() {
    console.log('beforeModel.before');
    await new Promise(r => setTimeout(r, 500));
    console.log('beforeModel.after');
  }

  async model() {
    const n = 500;
    console.log('model.before');
    await new Promise(r => setTimeout(r, n));
    console.log('model.after');
    return {
      n,
    };
  }

  async afterModel() {
    console.log('afterModel.before');
    await new Promise(r => setTimeout(r, 500));
    console.log('afterModel.after');
  }
}
