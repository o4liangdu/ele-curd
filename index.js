import EleCurd from './src/App.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('EleCurd', EleCurd)
}

EleCurd.install = (Vue) => {
  Vue.component('EleCurd', EleCurd)
}

export default EleCurd;
