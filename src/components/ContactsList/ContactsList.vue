<!-- CSS -->
<style lang="stylus" src="./ContactsList.styl"></style>

<!-- HTML -->
<template>

  <section class="contacts-list">

    <!-- Recherche -->
    <!-- À faire : créer un input de recherche et lier cet élément à la variable searchContact -->
    <input type="text" placeholder="Rechercher un nom" name="contacts" v-model="searchContact">

    <!-- Liste des contacts -->
    <!-- À faire : réaliser la liste de contacts grâce aux éléments disponibles dans ce composant -->
    <contacts-list-item v-for="contact in contactsFiltered" :data="contact" :key="contact.id"></contacts-list-item>

  </section>

</template>

<!-- JS -->
<script>

  // Import de certaines librairies nécessaires dans ce composant
  import axios from 'axios'
  import _ from 'lodash'

  // Import du composant ContactsListItem
  import ContactsListItem from '../ContactsListItem/ContactsListItem.vue'

  export default {

    // À faire : Définir ici le composant précédement importé
    components: {
      'contacts-list-item': ContactsListItem
    },

    data() {
      return {
        contacts: null,
        searchContact: ''
      }
    },

    computed: {

      /*
      / Cette variable calculée permet de retourner les contacts filtrés
      / par la recherche si elle existe. Sinon, elle retourne tous les contacts.
      */
      contactsFiltered() {

        let contacts = this.contacts
        if (this.searchContact.length) {
          const searchStr = this.searchContact.toLowerCase()
          contacts = _.filter(this.contacts, (item) => {
            return item.name.toLowerCase().includes(searchStr)
          })
        }
        return contacts

      }

    },

    created() {

      // À l'initialisation du composant, on récupère la liste des contacts
      this.getContacts()

    },

    methods: {

      getContacts() {

        /*
        / À faire :
        / Utilisez axios pour récupérer la liste des contacts
        / Faire une requête GET sur cette URL : https://jsonplaceholder.typicode.com/users
        / La base URL de l'API est déjà définie dans dans main.js
        / Variable à modifier : this.contacts
        */
        axios.get('/users')
            .then((response) => {
              this.contacts = response.data
            })
            .catch(function (error) {
              console.log(error)
            })

      }

    }

  }

</script>
