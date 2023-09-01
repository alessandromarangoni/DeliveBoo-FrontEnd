import {reactive} from 'vue'

export const store = reactive({
    loading: true,
    // API DELLE CATEGORIES
    urlApiCategories: "http://127.0.0.1:8000/api/categories/",
    // API DELLA LANDING PAGE (ALL RESTAURANTS)
    urlApiRestaurant: "http://127.0.0.1:8000/api/restaurants/",
    // API DELLA LANDING PAGE (FILTRATI)
    urlApiFilterByCategory: "http://127.0.0.1:8000/api/restaurants/search/",
    categories: [],

    selectedCategories:[],
    selectedRestaurant:null,
    restaurants: [],
    restaurantsAll:[],
    CategoriesName: [],
    menu:[],
});

