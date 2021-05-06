<template>
  <div>
    <label for="price-max">Montant maximum</label>
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
