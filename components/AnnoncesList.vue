<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(annonce, index) in annonces" :key="index">
        {{ annonce.title }}
        {{ annonce.prix }}
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
