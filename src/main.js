import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue';

import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-34838.firebaseio.com/';
Vue.filter('currency', (value) => {
	return 'R$' + value.toLocaleString();
});

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
