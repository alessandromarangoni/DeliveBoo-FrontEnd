<script>
    export default {
        name: "AppSection1",
        data() {
            return {

            }
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
                            v-model="categories"
                            class="pa-4"
                            selected-class="bg-primary"
                            multiple
                            show-arrows
                        >
                        <v-slide-group-item
                            v-for="n in 15"
                            :key="n"
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