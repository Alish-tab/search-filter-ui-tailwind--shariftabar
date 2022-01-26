<template>
    <div class="absolute right-12 flex flex-col gap-4">
        <!----------------- available filters--------------->
        <available-filters></available-filters>

        <!----------------- grouping filter --------------->
        <grouping-filter></grouping-filter>

    </div>
</template>

<script>
/*********************** available filters components *************************/  
    import AvailableFilters from '../base/AvailableFilters.vue'

/*********************** grouping filter components *************************/  
    import GroupingFilter from '../base/GrpoupingFilter.vue'

    export default{
        components:{
            AvailableFilters,
            GroupingFilter
        }
    }
</script>