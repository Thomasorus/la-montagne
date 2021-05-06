<template>
  <div>
    <p v-if="$fetchState.pending">Chargement des annonces....</p>
    <p v-else-if="$fetchState.error">
      Erreur lors de la réception des annonces
    </p>
    <ul v-else>
      <li v-for="(annonce, index) in annonces" :key="index">
        <AnnonceCard v-bind:annonce="annonce" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annonces: []
    }
  },
  async fetch() {
    this.annonces = await fetch('http://localhost:3001/annonces').then((res) =>
      res.json()
    )
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: var(--s0);
}
</style>