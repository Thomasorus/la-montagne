<template>
  <picture>
    <source type="image/webp" :srcset="webp" />

    <img
      loading="lazy"
      :src="image"
      :srcset="jpg"
      alt="Les montagnes d'Auvergne"
    />
  </picture>
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
  height: 50vh;
  width: 100%;
}
</style>