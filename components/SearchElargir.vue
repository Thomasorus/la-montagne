<template>
  <div>
    <p>Élargir la recherche ?</p>

    <input
      type="radio"
      name="elargir"
      id="elargir0"
      value="0"
      @click="handleClick"
      :aria-describedby="error ? 'elargir-error' : false"
      :aria-invalid="error ? true : false"
    />
    <label for="elargir0">Non</label>

    <input
      type="radio"
      name="elargir"
      id="elargir2"
      value="2"
      @click="handleClick"
      :aria-describedby="error ? 'elargir-error' : false"
      :aria-invalid="error ? true : false"
    />
    <label for="elargir2">2km</label>

    <input
      type="radio"
      name="elargir"
      id="elargir5"
      value="5"
      @click="handleClick"
      :aria-describedby="error ? 'elargir-error' : false"
      :aria-invalid="error ? true : false"
    />
    <label for="elargir5">5km</label>

    <input
      type="radio"
      name="elargir"
      id="elargir10"
      value="10"
      @click="handleClick"
      :aria-describedby="error ? 'elargir-error' : false"
      :aria-invalid="error ? true : false"
    />
    <label for="elargir10">10km</label>
    <input
      type="radio"
      name="elargir"
      id="elargir20"
      value="20"
      @click="handleClick"
      :aria-describedby="error ? 'elargir-error' : false"
      :aria-invalid="error ? true : false"
    />
    <label for="elargir20">20km</label>
    <small v-if="error" id="elargir-error">
      Veuillez sélectionner une option</small
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