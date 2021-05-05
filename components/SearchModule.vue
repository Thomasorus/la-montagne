<template>
  <section aria-label="Recherche de bien">
    <form @submit="checkForm" action="" method="post">
      <SearchAchatLoc v-model="search.achatloc" :formError="search.achatloc" />
      <SearchTypeBien v-model="search.typebien" :formError="search.typebien" />
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
      <button type="submit" value="Submit">Chercher parmi les annonces</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: {
        achatloc: null,
        typebien: null,
        adress: null,
        min: null,
        max: null,
        elargir: null,
        photos: false
      }
    }
  },
  methods: {
    checkForm: function (e) {
      if (
        this.search.achatloc &&
        this.search.typebien &&
        this.search.adress &&
        this.search.elargir
      ) {
        return true
      }

      this.errors = []

      if (!this.search.achatloc) {
        this.search.achatloc = true
      }
      if (!this.search.typebien) {
        this.search.typebien = true
      }

      e.preventDefault()
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