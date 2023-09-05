<script>
import { store } from '../../stores/store'
import { services } from '../../stores/services';
export default {
  name: "AppSearchBar",
  data() {
    return {
      store,
      services
    };
  },
  methods: {
  },
};
</script>


<template>
  <section class="container-fluid d-flex justify-content-center d-sm-none pb-10 pt-6">
    <div id="CategoriesSearch">

      <div class="d-flex flex-column align-items-center">
        <v-autocomplete 
        v-model="store.selectedCategories" 
        :items="store.categories" 
        item-title="name" 
        item-value="combinedValue"
        placeholder="Cerca una o più categorie"
        multiple 
        return-object
        chips 
        rounded
        theme="light"
        variant="solo"
        class="w-100"
        >
        </v-autocomplete>
        <v-btn class="custom-button" @click="services.getDataByCategories()">
          Cerca
        </v-btn>
      </div>

    </div>
  </section>
</template>

<style>
input {
  width: 100%;
}

.custom-button{
  border-radius:20px;
}

input:focus {
  outline: none;
}

.SearchButton {
  padding: 0.5em 1.5em;
  background-color: rgba(255, 225, 201, 0.384);
  border-radius: 0.5rem;
}

#CategoriesSearch {
  width: 300px;
  padding: 0 !important;
  margin: 0 !important;
}

@media screen and (min-width: 576px) {
  #CategoriesSearch {
    margin-left: 100px !important;
  }
}
</style>