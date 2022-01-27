<template>
    <div class="absolute right-12 flex flex-col gap-4">
        <!----------------- available filters--------------->
        <available-filters></available-filters>

        <!----------------- grouping filter --------------->
        <grouping-filter></grouping-filter>

        <!----------------- Sorted by filter --------------->
        <sorted-by></sorted-by>

        <!----------------- Shops filter --------------->
        <shop-filter></shop-filter>

    </div>
</template>

<script>
/*********************** available filters component *************************/  
    import AvailableFilters from '../base/AvailableFilters.vue'

/*********************** grouping filter component *************************/  
    import GroupingFilter from '../base/GrpoupingFilter.vue'

/*********************** sortedBy filter component *************************/  
    import SortedBy from '../base/SortedByFilter.vue'

/*********************** Shops filter components *************************/  
    import ShopFilter from '../base/ShopFilter.vue'

    export default{
        components:{
            AvailableFilters,
            GroupingFilter,
            SortedBy,
            ShopFilter
        }
    }
</script>