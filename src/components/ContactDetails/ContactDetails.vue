<!-- CSS -->
<style lang="stylus" src="./ContactDetails.styl"></style>

<!-- HTML -->
<template>

  <section class="contact-details">

    <!--
      À faire :
      Afficher les informations du contact sélectionné (voit screen2.jpg).
      Si la variable contactData est égale à null (c'est le cas au chargement de l'application), afficher un message "Veuillez sélectionner un contact" (voir screen1.jpg)
    -->
    <ul class="contact-list-item" v-if="contactData != null">
      <h1>{{ contactData.name }}</h1>
      <li> <strong class="tel">Téléphone</strong> {{contactData.phone}}</li>
      <li> <strong class="mail">Email</strong> {{contactData.email}}</li>
      <li> <strong class="address">Adresse</strong> {{contactData.address.city}}, {{contactData.address.street}} ({{contactData.address.zipcode}})</li>
      <li> <strong class="site">Site</strong> {{contactData.website}}</li>
      </router-link>
    </ul>
    <h3 v-else>Veuillez sélectionner un contact</h3>

  </section>

</template>

<!-- JS -->
<script>

  export default {

    computed: {

      /*
      / On récupère dans cette variable calculée
      / les données du contact qui sont stockées dans le store
      */
      contactData() {
        return this.$store.state.contactData
      }

    }

  }

</script>
