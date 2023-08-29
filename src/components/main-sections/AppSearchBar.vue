<script>
import axios from 'axios';
import {store} from '../../stores/store'
export default {
  data() {
    return {
      selectedCategory: '',
      store,
    };
  },
  methods: {
    handleCategoryChange() {
    console.log("Categoria selezionata:", this.selectedCategory);
  }
  },
  mounted() {
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
  ></v-autocomplete>

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