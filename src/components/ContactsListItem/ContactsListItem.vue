<!-- CSS -->
<style lang="stylus" src="./ContactsListItem.styl"></style>

<!-- HTML -->
<template>

  <!-- À faire : afficher le nom du contact dans l'élément et déclencher la méthode setContactData au clic -->
  <li :class="['contacts-list-items__item', contactData && contactData.id === data.id ? 'contacts-list-items__item--active' : '']" v-on:click="setContactData">
    <pre>{{ data.name }}</pre>
  </li>

</template>

<!-- JS -->
<script>

  export default {

    /*
    / À faire : la propriété nommée "data" doit être envoyée depuis la boucle réalisée dans le composant ContactsList
    */
    props: ['data'],

    computed: {

      /*
      / On récupère dans cette variable calculée
      / les données du contact qui sont stockées dans le store
      */
      contactData() {
        return this.$store.state.contactData
      }

    },

    methods: {

      setContactData() {

        /*
        / Lors d'un clic sur un contact, on met les données du contact dans le store
        / afin que le composant ContactDetails se mette à jour.
        /
        / Le store permet de partager des données entre les composants.
        */
        this.$store.commit('SET_CONTACT_DATA', this.data)

      }

    }

  }

</script>
