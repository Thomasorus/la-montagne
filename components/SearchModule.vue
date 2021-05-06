<template>
  <section aria-label="Recherche de bien">
    <form @submit="checkForm" action="" method="post">
      <SearchAchatLoc v-model="search.achatloc" :formError="error.achatloc" />
      <SearchTypeBien v-model="search.typebien" :formError="error.typebien" />
      <SearchAdress v-model="search.adress" :formError="error.adress" />
      <div class="splitter">
        <SearchPriceRangeMin v-model="search.min" />
        <SearchPriceRangeMax v-model="search.max" />
      </div>
      <SearchElargir v-model="search.elargir" :formError="error.elargir" />
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
      },
      error: {
        achatloc: false,
        typebien: false,
        adress: false,
        elargir: false
      }
    }
  },
  methods: {
    checkForm: function (e) {
      if (!this.search.achatloc) {
        this.error.achatloc = true
      } else {
        this.error.achatloc = false
      }
      if (!this.search.typebien) {
        this.error.typebien = true
      } else {
        this.error.typebien = false
      }
      if (!this.search.adress) {
        this.error.adress = true
      } else {
        this.error.adress = false
      }
      if (!this.search.elargir) {
        this.error.elargir = true
      } else {
        this.error.elargir = false
      }

      if (
        this.error.achatloc === false &&
        this.error.typebien === false &&
        this.error.adress === false &&
        this.error.elargir === false
      ) {
        return true
      }

      e.preventDefault()
    },
    addPhotos() {
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