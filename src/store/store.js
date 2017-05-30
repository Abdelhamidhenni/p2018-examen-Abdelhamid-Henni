import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// STATE

const state = {
  contactData: null
}


// MUTATIONS

const mutations = {

  /*
  / On met à jour la variable contactData
  / qui est est mis à jour depuis le composant ContactsListItem
  / et récupérée dans le composant ContactDetails
  */
  SET_CONTACT_DATA (state, data) {
    state.contactData = data
  }

}


export default new Vuex.Store({
  state,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
