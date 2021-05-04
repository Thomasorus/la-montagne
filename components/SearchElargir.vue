<template>
  <div>
    <p>Élargir la recherche ?</p>

    <input
      type="radio"
      name="elargir"
      id="elargir0"
      value="0"
      @click="handleClick"
    />
    <label for="elargir0">Non</label>

    <input
      type="radio"
      name="elargir"
      id="elargir2"
      value="2"
      @click="handleClick"
    />
    <label for="elargir2">2km</label>

    <input
      type="radio"
      name="elargir"
      id="elargir5"
      value="5"
      @click="handleClick"
    />
    <label for="elargir5">5km</label>

    <input
      type="radio"
      name="elargir"
      id="elargir10"
      value="10"
      @click="handleClick"
    />
    <label for="elargir10">10km</label>
    <input
      type="radio"
      name="elargir"
      id="elargir20"
      value="20"
      @click="handleClick"
    />
    <label for="elargir20">20km</label>
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