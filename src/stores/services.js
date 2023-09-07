import { store } from "./store"
import {router} from '../router';
import axios from "axios"

export const services = {
    selectCategory(item) {
        const found = store.selectedCategories.find((e) => e.id == item.id)
        if (found) {
            const indexid = store.selectedCategories.indexOf(item);
            store.selectedCategories.splice(indexid, 1);
        }
        else {
            store.selectedCategories.push(item)
        };
        console.log("Categorie selezionate:", store.selectedCategories)
        this.getDataByCategories()
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
            .catch((error) => {
                this.loading = false;
                this.loadingError = error.message;

                router.push({ name: "error", params: { code: '404' } })
            });
    },
    getDataByCategories() {
        console.log('parte la query', store.selectedCategories);
        if (store.selectedCategories.length > 0) {
            axios.get('http://127.0.0.1:8000/api/restaurants/by-categories', {
                params: {
                    category_ids: store.selectedCategories.map(category => category.id)
                }
            })
                .then(response => {
                    store.restaurants = response.data
                    console.log("Ristoranti trovati", store.restaurants);
                })
                .catch((error) => {
                    this.loading = false;
                    this.loadingError = error.message;

                    router.push({ name: "error", params: { code: '404' } });
                });
        } else {
            this.getAllRestaurants()
            // store.restaurants = store.restaurantsAll
            console.log('tutti i ristoranti', store.restaurantsAll);
            console.log('store.restaurants', store.restaurants);
        }
    },

    getAllRestaurants() {
        axios.get('http://127.0.0.1:8000/api/restaurants/').then(r => {
            store.restaurants = r.data.data
            store.restaurantsAll = r.data.data
            store.loading = false
        })
        .catch((error) => {
            console.error(error);
            store.loading = false;
            router.push({ name: "error", params: { code: '404' } })
        });
    },


    // CART FUNCTION (ADD,SUB)
    addProduct(item) {
        // CREAZIONE CARRELLO VUOTO SE NON ESISTE
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        const cart = JSON.parse(localStorage.getItem('cart'));

        if (cart.some((e) => e.restaurant_id !== item.restaurant_id)) {
            console.log('Nel carrello hai già prodotti di un altro ristorante. Svuota prima il carrello!');
            store.warning = true;
            // blocca la funzione se nel carrello ci sono prodotti di un ristorante diverso
            return
        }

        // VERIFICA SE L'ITEM è GIA' PRESENTE NEL CARRELLO E NE AGGIUNGE LA QUANTITA'
        const existItem = cart.find((e) => e.id === item.id);
        if (existItem) {
            existItem.quantity++
        } else {
            const newItem = {
                ...item,
                "quantity": 1
            }
            cart.push(newItem);
        }
        store.cart = cart
        localStorage.setItem('cart', JSON.stringify(cart));

        this.sumPrice();
    },
    subProduct(item) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            return
        }
        const existItem = cart.find((e) => e.id === item.id);
        if (existItem) {
            if (existItem.quantity <= 1) {
                const index = cart.indexOf(existItem);
                cart.splice(index, 1);
                console.log(cart);
            } else {
                existItem.quantity--
            }
        }
        if (cart.length == 0) {
            this.cleanCart()
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            store.cart = cart
        }
        
        this.sumPrice();
    },
    cleanCart() {
        localStorage.removeItem("cart")
        store.cart = [];
    },
    sumPrice(){
        let sum = 0
        store.cart.forEach(element => {
            sum += (element.price * element.quantity)
        });
        store.total = sum.toFixed(2);
    }
    
}