import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTelInput from 'vue-tel-input'
import Carousel3d from 'vue-carousel-3d';
 
Vue.use(Carousel3d);
Vue.config.productionTip = false

Vue.use(VueTelInput)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
