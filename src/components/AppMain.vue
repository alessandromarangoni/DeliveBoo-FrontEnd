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
    <div class="container-fluid p-5">
        <!-- Motto -->
        <div class="row p-5">
            <div class="col p-5 m-5">
                <h1>Il tuo pasto a portata di un click</h1>
                <AppSection1 />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>