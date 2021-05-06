<template>
  <div class="wrapper">
    <article>
      <div class="image">
        <Gallery :images="annonce.photos" :alt="annonce.title" />
      </div>
      <div class="description">
        <div>
          <i>{{ annonce.transaction }}</i>
          <div class="title">
            <h2>{{ annonce.title }}</h2>
            <strong>
              <Price v-bind:price="annonce.prix" />
              <PerMonth v-if="annonce.transaction == 'location'" />
            </strong>
          </div>
          <div class="metas">
            {{ annonce.lieu.ville }} -
            <Surface v-bind:surface="annonce.surface" /> -
            {{ annonce.pieces }} pièces
          </div>
        </div>

        <p>{{ annonce.description }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annonce: null
    }
  },
  async asyncData({ $axios, route }) {
    const data = await $axios.$get(
      `http://localhost:3001/annonces?slug=${route.query.slug}`
    )
    const annonce = data[0]
    return { annonce }
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