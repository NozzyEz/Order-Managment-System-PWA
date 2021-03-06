import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Apollo Imports for GraphQL
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { createProvider } from './vue-apollo'
import VueQriously from 'vue-qriously'

// Ionic Imports for UI
import Ionic from '@ionic/vue'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false

const httpLink = new HttpLink({
	uri: 'https://obscure-ocean-47876.herokuapp.com//graphql'
})

const authMiddelware = new ApolloLink((operation, forward) => {
	const token = localStorage.getItem('authenticationToken')
	// console.log(token)

	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : null
		}
	})

	return forward(operation)
})

Vue.use(VueApollo)
Vue.use(Ionic)
Vue.use(VueQriously)
const apolloClient = new ApolloClient({
	link: authMiddelware.concat(httpLink),
	cache: new InMemoryCache(),
	connectToDevTools: true
})

const apolloProvider = new createProvider({
	defaultClient: apolloClient,
	defaultOptions: { $loadingKey: 'loading' }
})

new Vue({
	router,
	apolloProvider: apolloProvider,
	store,
	render: (h) => h(App)
}).$mount('#app')
