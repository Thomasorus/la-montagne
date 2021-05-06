<template>
  <div class="wrapper">
    <label for="geo-search" style="grid-area: label"
      >Entrez la ville, le code postal ou la rue de votre choix :</label
    >
    <input
      type="text"
      id="geo-search"
      v-model="search"
      :aria-describedby="error ? 'search-error' : false"
      :aria-invalid="error ? true : false"
    />
    <small v-if="error" id="search-error"
      >Aucune information de lieu n'a été trouvée. Veuillez retenter.</small
    >
    <ul v-if="adresses && search" tabindex="0">
      <li
        v-for="(adress, index) in adresses.features"
        :key="index"
        @click="addToSearch"
      >
        {{ adress.properties.name }} {{ adress.properties.postcode }}
        {{ adress.properties.city }}
        <!-- <span class="visually-hidden" role="button">Valider</span> -->
      </li>
    </ul>
    <button @click="geoSearch($event)">Chercher</button>
  </div>
</template>



<script>
export default {
  props: ['formError'],
  data() {
    return {
      search: '',
      adresses: null,
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
    async geoSearch(event) {
      event.preventDefault()
      if (!this.search) {
        searchInput.setAttribute('aria-describedby', 'error')
        errorMsg.setAttribute('style', 'display:block;')
      } else {
        const location = this.search.toLowerCase().replaceAll(' ', '+')
        const addresses = await fetch(
          `/geo/?q=${location}&limit=15`
        ).then((res) => res.json())

        if (addresses.features.length > 0) {
          this.error = false
          this.adresses = addresses
        } else {
          this.error = true
        }
      }
    },
    addToSearch(event) {
      this.search = event.srcElement.innerText
      this.$emit('input', event.srcElement.innerText)
      this.adresses = null
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}
ul {
  position: absolute;
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 2px lightgray;
  list-style: none;
  margin: 80px 0 0 0;
  grid-area: list;
}

li:hover {
  cursor: pointer;
  background-color: lightgray;
}

small {
  color: red;
}

.wrapper {
  display: grid;
  grid-template-areas:
    'label label label'
    'input input button'
    'error error error'
    'list list list';
  grid-template-columns: 1fr 1fr 1fr;
}

input {
  grid-area: input;
}
label {
  grid-area: label;
}
small {
  grid-area: error;
}
</style>