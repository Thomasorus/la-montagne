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
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: []
    }
  },
  methods: {
    handleClick(event) {
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