<script>
  import AppSection1 from './main-sections/AppSection1.vue'

    export default {
        name: "AppMain",

        components: {

            AppSection1,

            },

        data() {
            return {
                categories:['ciao','io','voglio','mori']
            }
        }
    }
</script>

<template>
    <div class="container-fluid ps-5 ms-5 pt-5">
        <!-- Motto -->
        <div class="row ms-5 ps-5 mt-5 pt-5">
            <div class="col ps-5 pt-5 mt-5 ms-5">
                <h1>Il tuo pasto a portata di un click</h1>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>