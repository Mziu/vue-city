import App from '../App'

export default [{
	path: '/',
	component: App,
	children: [{
		pathL: '',
		component: r => require.ensure([], () => r(require('../page/home')), 'home')
	},]
}]