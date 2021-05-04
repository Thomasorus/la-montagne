<template>
  <div>
    <label for="price-max">Maximum</label>
    <input type="number" id="price-max" @change="handleClick" min="0" />
  </div>
</template>


<script>
export default {
  methods: {
    handleClick(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
input[type='number'] {
  width: 50% !important;
  max-width: 100px;
}
</style>