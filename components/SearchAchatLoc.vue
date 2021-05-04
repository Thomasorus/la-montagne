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