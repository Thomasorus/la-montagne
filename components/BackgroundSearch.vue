<template>
  <div class="search-wrapper">
    <picture aria-hidden="true">
      <source type="image/webp" :srcset="webp" />

      <img loading="lazy" :src="image" :srcset="jpg" />
    </picture>
    <SearchModule />
  </div>
</template>

<script>
export default {
  props: ['image'],
  data() {
    return {
      webp:
        this.image +
        '-300.webp 300w, ' +
        this.image +
        '-600.webp 600w,' +
        this.image +
        '-900.webp 900w,' +
        this.image +
        '.webp',
      jpg:
        this.image +
        '-300.jpg 300w, ' +
        this.image +
        '-600.jpg 600w,' +
        this.image +
        '-900.jpg 900w,' +
        this.image +
        '.jpg'
    }
  }
}
</script>

<style scoped>
img,
picture {
  object-fit: cover;
  object-position: center center;
  height: 70vh;
  width: 100%;
}

.search-wrapper {
  position: relative;
}

section {
  position: absolute;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  top: var(--s5);
  left: 50%;
  transform: translate(-50%);
}
</style>