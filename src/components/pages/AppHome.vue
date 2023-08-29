<script>
import AppMain from '../AppMain.vue';
import AppSection1 from '../main-sections/AppSection1.vue';

    export default{ 
        name:'AppHome',
        components: {
            AppMain,
            AppSection1,
        }
    }
        
</script>
<template>
     <div>
        <AppMain />
        <AppSection1 />
     </div>
</template>