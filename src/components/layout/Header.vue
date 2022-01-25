<template>
 <div class="bg-white p-4 border-b border-secondary w-full h-20">
     <!----------- SEARCH BOX ------------->
     <search-box></search-box>
     
 </div>
</template>

<script>
    /************ Search component *************/
    import Search from '../base/BaseSearchBox.vue'

    export default{
        components:{
           "search-box": Search
        }
    }
</script>


