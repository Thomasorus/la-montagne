<template>
  <section aria-label="Recherche de bien">
    <form>
      <SearchAchatLoc v-model="search.achatloc" />
      <SearchTypeBien v-model="search.typebien" />
      <SearchAdress v-model="search.adress" />
      <div class="splitter">
        <SearchPriceRangeMin v-model="search.min" />
        <SearchPriceRangeMin v-model="search.max" />
      </div>
      <SearchElargir v-model="search.elargir" />
      <label for="photos">Uniquement avec photos</label>
      <input
        type="checkbox"
        id="photos"
        :checked="search.photos"
        @click="addPhotos"
      />
      <br />
      <button @click="chercher">Chercher parmi les annonces</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: {
        achatloc: '',
        typebien: '',
        adress: '',
        min: '',
        max: '',
        elargir: '',
        photos: false
      }
    }
  },
  methods: {
    chercher(event) {
      event.preventDefault()
      console.log(this.search)
    },
    addPhotos(event) {
      if (this.search.photos) {
        this.search.photos = false
      } else {
        this.search.photos = true
      }
    }
  }
}
</script>

<style scoped>
section {
  background: var(--background);
  padding: var(--s0);
}
form > * + * {
  margin-top: var(--s2);
}

.splitter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--s-1);
}
</style>