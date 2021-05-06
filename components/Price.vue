<template>
  <span>{{ price }}<abbr title="Euro">€</abbr></span>
</template>

<script>
export default {
  props: ['price']
}
</script>

<style scoped>
abbr {
  margin-left: var(--s-5);
  position: relative;
  z-index: 1;
}
</style>