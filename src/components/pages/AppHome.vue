<script>
import AppMain from '../AppMain.vue';
import AppSection1 from '../main-sections/AppSection1.vue';
import AppHeader from '../AppHeader.vue';

    export default{ 
        name:'AppHome',
        components: {
            AppHeader,
            AppMain,
            AppSection1,
        }
    }
        
</script>
<template>
     <div>
        <AppHeader />
        <AppMain />
     </div>
</template>