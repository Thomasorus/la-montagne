<template>
  <div>
    <label for="type-bien">Type de bien</label>
    <select
      id="type-bien"
      :aria-describedby="error ? 'type-error' : false"
      :aria-invalid="error ? true : false"
    >
      <option value="null" @click="handleClick">
        Sélectionner le type de bien
      </option>
      <option
        v-for="(type, index) in types"
        :key="index"
        :value="type"
        @click="handleClick"
      >
        {{ type }}
      </option>
    </select>
    <small v-if="error ? true : false" id="type-error" role="alert">
      Veuillez choisir un type de bien</small
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
      if (event.target.value !== 'null') {
        this.error = false
        this.$emit('input', event.target.value)
      } else {
        this.error = true
        this.$emit('input', 'null')
      }
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