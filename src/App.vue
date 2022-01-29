<template>
 <div class="grid grid-cols-10 justify-items-center md:gap-x-16">
     <my-header class="col-span-full"></my-header> 
    <products class="col-span-full md:col-start-1 md:col-end-9"></products>
    <filters class="md:col-start-9"></filters>
     
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


