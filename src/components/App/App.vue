<!-- CSS -->
<style lang="stylus" src="./App.styl"></style>

<!-- HTML -->
<template>

  <div class="app-block">
    <contacts-list></contacts-list>
    <contact-details></contact-details>
  </div>

</template>

<!-- JS -->
<script>

  // Import du composant ContactsList
  import ContactsList from '../ContactsList/ContactsList.vue'

  // Import du composant ContactDetails
  import ContactDetails from '../ContactDetails/ContactDetails.vue'

  export default {

    components: {
      'contacts-list': ContactsList,
      'contact-details': ContactDetails
    }

  }

</script>
