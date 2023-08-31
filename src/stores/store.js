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
    selectedCategoriesIds:[],

    restaurants: [],
    restaurantsAll:[],
    CategoriesName: [],
});

export const motto = reactive({
    "1": "Il tuo pasto a portata di un click",
    "2": "Consegnamo felictà alla tua porta",
    "3": "I tuoi ristoranti preferiti a portata di mano",
    "4": "Dal divano alla porta, il resto della strada la facciamo noi",
    "5": "Dì addio al traffico, ci pensiamo noi"
})