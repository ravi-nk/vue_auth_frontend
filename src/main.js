import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://automoney.co.in/vue_auth/back_end/api/';

axios.interceptors.response.use(undefined, function (error) {
  // console.log(error.response.status);
  if (error) {
    const originalRequest = error.config;
    if (error.response.status=== 404 && !originalRequest._retry) {
//  if(error.response.status === 404 && error.response.status === 422){
   
        originalRequest._retry = true;
        store.dispatch('LogOut')
        return router.push('/vue_auth/')
    }
  }
});


Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');