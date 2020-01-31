import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Stocks from '../views/Stocks';
import Portfolio from '../components/portfolio/Portfolio';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: Portfolio
	},
	{
		path: '/stocks',
		name: 'Stocks',
		component: Stocks
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
