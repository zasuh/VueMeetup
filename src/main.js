import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBlg_dS6vAXi8dNhFOw1AM4thHrn1jVZo0',
      authDomain: 'vue-meetup-b80f5.firebaseapp.com',
      databaseURL: 'https://vue-meetup-b80f5.firebaseio.com',
      projectId: 'vue-meetup-b80f5',
      storageBucket: ''
    })
  }
})
