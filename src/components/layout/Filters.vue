<template>
    <div class="hidden md:flex flex-col gap-4">
        <!----------------- available filters--------------->
        <available-filters></available-filters>

        <!----------------- grouping filter --------------->
        <grouping-filter></grouping-filter>

        <!----------------- Sorted by filter --------------->
        <sorted-by></sorted-by>

        <!----------------- Shops filter --------------->
        <shop-filter></shop-filter>

        <!----------------- Brand filter --------------->
        <brand-filter></brand-filter>
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

/*********************** Brand filter components *************************/  
    import BrandFilter from '../base/BrandFilter.vue'

    export default{
        components:{
            AvailableFilters,
            GroupingFilter,
            SortedBy,
            ShopFilter,
            BrandFilter
        }
    }
</script>