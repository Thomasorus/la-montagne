<template>
  <div>
    <label for="type-bien">Type de bien</label>
    <select id="type-bien">
      <option value="null">Sélectionner le type de bien</option>
      <option
        v-for="(type, index) in types"
        :key="index"
        :value="type"
        @click="handleClick"
      >
        {{ type }}
      </option>
    </select>
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
      types: [],
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
      this.error = false
      this.$emit('input', event.target.value)
    }
  },
  async fetch() {
    this.types = await fetch('http://localhost:3001/types').then((res) =>
      res.json()
    )
  }
}
</script>


<style scoped>
small {
  display: block;
  color: red;
}
</style>