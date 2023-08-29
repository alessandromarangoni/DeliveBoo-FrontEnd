import {reactive} from 'vue'

export const storeCategories = reactive({
    loading: true,
    urlApiCategories: "http://127.0.0.1:8000/api/categories",
    categories: []
});

export const storeRestaurant = reactive ({
    loading: true,
    urlApiRestaurant: "http://127.0.0.1:8000/api/restaurants",
    restaurants: []
});

export const storeCategoriesRestaurants = reactive({
    CategoryId:'',
    loading: true,
    urlApiCategories: "http://127.0.0.1:8000/api/restaurants/search/1",
    categoriesRestaurant: []
});