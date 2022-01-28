<template>
 <div>
     <my-header></my-header>
     <filters></filters>
     <products></products>
 </div>
</template>

<script>
    import Header from './components/layout/Header.vue'
    import filters from './components/layout/Filters.vue'
    import products from './components/layout/Products.vue'
    export default{
        components:{
            "my-header":Header,
            
            filters,
            products
        }
    }
</script>


