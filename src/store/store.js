import {reactive} from 'vue'

export const storeCategories = reactive({
    loading: true,
    urlApiCategories: "http://127.0.0.1:8000/api/categories",
    categories: []

})