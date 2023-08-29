<script>
    import { storeCategories } from '../../store/store.js';
    import axios from 'axios';

    export default {
        name: "AppSection1",
        data() {
            return {
                storeCategories,
            }
        },
        methods:{
            getCategories(){
                axios.get(this.storeCategories.urlApiCategories)
                .then(r => {
                    storeCategories.categories=(r.data.data)
                    console.log(storeCategories.categories)
                })
                .catch(e => console.log(e))
            }
        },
        mounted(){
            console.log(this.storeCategories.urlApiCategories),

            this.getCategories()
        }
    }
</script>

<template>
    <div class="d-flex gx-3 justify-content-center">
                    <v-sheet
                        class="mx-auto"
                        elevation="8"
                        max-width="800"
                    >
                        <v-slide-group
                            class="pa-4"
                            selected-class="bg-primary"
                            multiple
                            show-arrows
                        >
                        <v-slide-group-item
                           v-for="(item, index) in this.storeCategories.categories"
                            v-slot="{ isSelected, toggle, selectedClass }"
                        >
                            <v-card
                                color=""
                                :class="['ma-4', selectedClass]"
                                class="prova"
                                height="100"
                                width="200"
                                @click="toggle"
                            >
                                <div class="d-flex fill-height align-center justify-center">
                                    <v-scale-transition>
                                        <v-icon
                                            v-if="isSelected"
                                            color="white"
                                            size="48"
                                            icon="mdi-close-circle-outline"
                                        >
                                        </v-icon>
                                    </v-scale-transition>
                                    <div>
                                    </div>
                                    {{item.name}}
                                </div>
                            </v-card>
                        </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </div>
</template>

<style scoped lang="scss">
@import "/src/variables.scss";

.prova{
    background-color: $light-orange;
}

</style>