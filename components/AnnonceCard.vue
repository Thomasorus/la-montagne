<template>
  <article>
    <div class="image">
      <img height="200" :src="image" alt="annonce.title" />
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
    <NuxtLink :to="this.slug" />
  </article>
</template>


<script>
export default {
  props: ['annonce'],
  data() {
    return {
      image: this.annonce.photos['1'],
      slug: 'annonce?slug=' + this.annonce.slug
    }
  }
}
</script>

<style scoped>
article {
  position: relative;
  border: 1px solid #ddd;
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
}

article a {
  position: absolute;
  width: 100%;
  height: 100%;
}

.description {
  padding: var(--s0);
}

.description > * + * {
  margin-top: var(--s0);
}

.title {
  display: grid;
  grid-template-columns: 6fr 1fr;
  gap: var(--s0);
  align-items: center;
  justify-items: start;
}

strong {
  justify-self: end;
  white-space: nowrap;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

i:first-letter {
  text-transform: capitalize;
}
</style>