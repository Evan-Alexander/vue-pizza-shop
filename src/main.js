import Vue from 'vue';
import App from './App.vue';
import { MdButton, MdDrawer } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(VueCarousel);

new Vue({
  render: h => h(App),
}).$mount('#app')
