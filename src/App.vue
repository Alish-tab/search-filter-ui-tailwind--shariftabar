<template>
 <div>
     <my-header></my-header>
     <filters></filters>
 </div>
</template>

<script>
    import Header from './components/layout/Header.vue'
    import filters from './components/layout/Filters.vue'
    export default{
        components:{
            "my-header":Header,
            
            filters
        }
    }
</script>


