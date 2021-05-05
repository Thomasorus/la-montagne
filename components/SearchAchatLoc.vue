<template>
  <div>
    Vous souhaitez :
    <br />
    <label for="location">Louer</label>
    <input
      type="radio"
      name="achatloc"
      id="location"
      value="location"
      @click="handleClick"
    />
    <label for="acheter">Acheter</label>
    <input
      type="radio"
      name="achatloc"
      id="acheter"
      value="achat"
      @click="handleClick"
    />
    <small v-if="error" id="achatloc-error">
      Veuillez choisir entre location et achat</small
    >
  </div>
</template>

<script>
export default {
  props: ['formError'],
  data() {
    return {
      error: false
    }
  },
  watch: {
    formError: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.error = newVal
        if (this.error !== true) {
          this.error = false
        }
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
small {
  display: block;
  color: red;
}
</style>