<template>
  <nav aria-label="Navigation principale">
    <ul>
      <li>
        <NuxtLink to="/">Accueil</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/annonces">Annonces</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/annonces/neuf">Neuf</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/annonces/entreprises">Entreprises et commerces</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/pros">Pros</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/publier">Passez votre annonce</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/mailing">Alerte Mail</NuxtLink>
      </li> -->
      <!-- <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li> -->
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  list-style: none;
  margin-top: 5px;
}
li {
  padding: 10px;
}
a {
  font-size: var(--s-1);
  text-transform: uppercase;
  display: inline;
  box-shadow: 0 -3px 0 var(--red) inset;
  padding-bottom: 8px;
  font-weight: 500;
}
</style>