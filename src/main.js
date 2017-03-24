import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Quotes from './components/Quotes.vue'
import NewQuote from './components/NewQuote.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'

Vue.use(VueRouter)

const routes = [
    {path: '', component: Quotes},
    {path: '/new-quote', component: NewQuote},
    {path: '/signup', component: SignUp},
    {path: '/signin', component: SignIn}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
