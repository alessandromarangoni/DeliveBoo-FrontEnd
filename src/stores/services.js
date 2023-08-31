import { store } from "./store"
import axios from "axios"

export const services = {
    selectCategory(item) {
        if (store.selectedCategories.includes(item)) {
            const indexid = store.selectedCategories.indexOf(item);
            store.selectedCategories.splice(indexid, 1);
        }
        else {
            store.selectedCategories.push(item)
        };
        console.log("Categorie selezionate:", store.selectedCategories)
        this.getDataByCategories()
    },
    getAllRestaurants() {
        axios.get('http://127.0.0.1:8000/api/restaurants/').then(r => {
            store.restaurants = r.data.data
            store.restaurantsAll = r.data.data
            store.loading = false
        })
    },
    getCategories() {
        axios.get('http://127.0.0.1:8000/api/categories/')
            .then(r => {
                store.categories = (r.data.data)

                store.categories.forEach(element => {
                    store.CategoriesName.push(element.name)
                });
                console.log(store.categories)
            })
            .catch(e => console.log(e))
    },
    getDataByCategories() {
        console.log('parte la query', store.selectedCategories);
        if (store.selectedCategories.length > 0) {
            axios.get('http://127.0.0.1:8000/api/restaurants/by-categories/', {
                params: {
                    category_ids: store.selectedCategories.map(category => category.id)
                }
            })
                .then(response => {
                    store.restaurants = response.data
                    console.log("Ristoranti trovati", store.restaurants);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            this.getAllRestaurants()
            // store.restaurants = store.restaurantsAll
            console.log('tutti i ristoranti', store.restaurantsAll);
            console.log('store.restaurants', store.restaurants);
        }
    },
    getDataByCategoriesIds() {
        console.log('parte la query', store.selectedCategoriesIds);
        if (store.selectedCategoriesIds.length > 0) {
            axios.get('http://127.0.0.1:8000/api/restaurants/by-categories/', {
                params: {
                    category_ids: store.selectedCategoriesIds
                }
            })
                .then(response => {
                    store.restaurants = response.data
                    console.log("Ristoranti trovati", store.restaurants);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            this.getAllRestaurants()
            // store.restaurants = store.restaurantsAll
            console.log('tutti i ristoranti', store.restaurantsAll);
            console.log('store.restaurants', store.restaurants);
        }
    }
}