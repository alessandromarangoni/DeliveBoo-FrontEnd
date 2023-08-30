<script>
import axios from 'axios';
import {store} from '../../stores/store'
export default {
  data() {
    return {
      selectedCategory:null,
      store,
    };
  },
  methods: {
    handleCategoryChange() { console.log("Categoria selezionata:", this.selectedCategory);},

    getDataByCategories(){
      axios.get('http://127.0.0.1:8000/api/restaurants/by-categories/', {
          params: {
            category_ids: this.selectedCategory
          }
        })
        .then(response => {
           store.restaurants = response.data.results
            console.log(store.restaurants);
        })
        .catch(error => {
          console.error(error);
        });
      }
  },
};
</script>


<template>
  <div class="w-50 m-auto">
    <v-autocomplete
    v-model="selectedCategory"
    :items="store.categories"
    item-title="name"
    item-value="id"
    label="Cerca una categoria"
    @change="handleCategoryChange()"
    multiple
    chips
  ></v-autocomplete>
  </div>

  <div @click="getDataByCategories(), handleCategoryChange()" >
      Bottoneooooooooooooooooooooooooooooooo
    </div>

</template>

<style>
    input {
        width: 100%;
    }
    input:focus {
        outline: none;
    }
</style>