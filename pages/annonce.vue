<template>
  <div class="wrapper">
    <p v-if="$fetchState.pending">Récupération de l'annonce...</p>
    <p v-else-if="$fetchState.error">
      Une erreur est survenue. Impossible de récupérer l'annonce.
    </p>
    <div v-else>
      <article>
        <div class="image">
          <Gallery :images="annonce[0].photos" :alt="annonce[0].title" />
        </div>
        <div class="description">
          <div>
            <i>{{ annonce[0].transaction }}</i>
            <div class="title">
              <h2>{{ annonce[0].title }}</h2>
              <strong>
                <Price v-bind:price="annonce[0].prix" />
                <PerMonth v-if="annonce[0].transaction == 'location'" />
              </strong>
            </div>
            <div class="metas">
              {{ annonce[0].lieu.ville }} -
              <Surface v-bind:surface="annonce[0].surface" /> -
              {{ annonce[0].pieces }} pièces
            </div>
          </div>

          <p>{{ annonce[0].description }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annonce: null
    }
  },
  async fetch() {
    this.annonce = await fetch(
      `http://localhost:3001/annonces?slug=${this.$route.query.slug}`
    ).then((res) => res.json())
  }
}
</script>


<style scoped>
.wrapper {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: var(--s5);
}
</style>

<style scoped>
article > * + * {
  margin-top: var(--s0);
}
.description > * + * {
  margin-top: var(--s0);
}
</style>