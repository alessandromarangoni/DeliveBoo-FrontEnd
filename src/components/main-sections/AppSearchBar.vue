<script>
import axios from 'axios';
import {store} from '../../stores/store'
export default {
  name: "AppSearchBar",
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
  <section class="container-fluid d-flex justify-content-center d-sm-none">
      <div id="CategoriesSearch" > 
              
          <div>
            <v-autocomplete
            v-model="selectedCategory"
            :items="store.categories"
            item-title="name"
          item-value="id"
          label="Cerca una categoria"
          @change="handleCategoryChange()"
          multiple
        chips
        clearable
        variant="solo-filled"
          
        ></v-autocomplete>
      </div>

      <div>
        <button class="SearchButton" @click="getDataByCategories(), handleCategoryChange()" >
          Cerca
        </button>
      </div>

  </div>
</section>
</template>

<style>
  input {
      width: 100%;
  }
  input:focus {
      outline: none;
  }
  .SearchButton{
    padding: 0.5em 1.5em;
    background-color: rgba(255, 225, 201, 0.384);
    border-radius: 0.5rem;
  }
  #CategoriesSearch{
  width: 300px;
  padding: 0 !important;
  margin: 0 !important;
  } 
  @media screen and (min-width: 576px) {
    #CategoriesSearch{
      margin-left: 100px !important;
    }
  }

</style>