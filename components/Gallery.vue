<template>
  <div>
    <img class="main-image" :src="current" alt="alt" />
    <div class="gallery">
      <span v-for="(img, index) in images" :key="index">
        <img :src="img" alt="alt" @click="changeImage($event)" />
      </span>
    </div>
  </div>
</template>


<script>
export default {
  props: ['images', 'alt'],
  data() {
    return {
      current: this.images['1']
    }
  },
  methods: {
    changeImage(event) {
      this.current = event.target.attributes.src.value
    }
  }
}
</script>

<style scoped>
.gallery {
  margin-top: var(--s-5);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px;
  gap: var(--s-5);
}
.main-image {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
.gallery img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>