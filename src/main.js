// On importe Vue
import Vue from 'vue'

// On importe axios
import axios from 'axios'

// On importe le composant App
import App from './components/App/App.vue'

// On importe le store de Vue
import store from './store/store'

// On configure axios
// On défini ici la base URL de l'API
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

// On initialise l'application
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
