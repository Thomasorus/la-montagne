<template>
  <span>{{ surface }}<abbr title="Mètres carrés">m2</abbr></span>
</template>

<script>
export default {
  props: ['surface']
}
</script>

<style scoped>
abbr {
  margin-left: var(--s-5);
  position: relative;
  z-index: 1;
}
</style>