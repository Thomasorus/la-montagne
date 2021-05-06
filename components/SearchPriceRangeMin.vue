<template>
  <div>
    <label for="price-min">Montant minimum</label>
    <input type="number" id="price-min" @change="handleClick" min="0" />
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