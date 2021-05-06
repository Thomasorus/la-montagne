<template>
  <main>
    <h1 v-if="error.statusCode === 404">Cette page n'existe pas</h1>
    <h1 v-else>Une erreur est survenue</h1>

    <p>
      Vous pouvez <NuxtLink to="/">retourner à l'accueil</NuxtLink> ou
      <NuxtLink to="/annonces">consulter les annonces</NuxtLink>.
    </p>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>
