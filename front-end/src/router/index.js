import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/mychart',
		name: 'MyChart',
		component: () => import('../components/MyChart.vue'),
	},
	{
		path: '/hello',
		name: 'Navbar',
		component: () => import('../components/Navbar.vue'),
	},
	{
		path: '/footer',
		name: 'Footer',
		component: () => import('../components/MainFooter.vue'),
	},
	{
		path: '/google',
		name: 'GoogleLogin',
		component: () => import('../components/GoogleLogin.vue'),
	},
	{
		path: '/',
		name: 'SignUp',
		component: () => import('../components/SignUp.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../components/RegisterV2.vue'),
	},
	{
		path: '/uploader',
		name: 'uploader',
		component: () => import('../components/Uploader.vue'),
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('../components/DashBoard.vue'),
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
