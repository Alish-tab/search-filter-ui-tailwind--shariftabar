<template>
    <div class="flex flex-col">
        <!----------------- available filters--------------->
        <available-filters></available-filters>
        
    </div>
</template>

<script>
/*********************** available filters components *************************/  
    import AvailableFilters from '../base/AvailableFilters.vue'

    export default{
        components:{
            'available-filters':AvailableFilters
        }
    }
</script>