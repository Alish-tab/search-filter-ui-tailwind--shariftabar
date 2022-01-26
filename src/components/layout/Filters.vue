<template>
    <div class="absolute right-12 flex flex-col gap-4">
        <!----------------- available filters--------------->
        <available-filters></available-filters>

        <!----------------- grouping filter --------------->
        <grouping-filter></grouping-filter>

        <!----------------- Sorted by filter --------------->
        <sorted-by></sorted-by>
    </div>
</template>

<script>
/*********************** available filters components *************************/  
    import AvailableFilters from '../base/AvailableFilters.vue'

/*********************** grouping filter components *************************/  
    import GroupingFilter from '../base/GrpoupingFilter.vue'

/*********************** sortedBy filter components *************************/  
    import SortedBy from '../base/SortedByFilter.vue'

    export default{
        components:{
            AvailableFilters,
            GroupingFilter,
            SortedBy
        }
    }
</script>