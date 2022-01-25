<template>
 <div class="bg-white p-4 pl-12 pr-12 border-b border-secondary w-full h-20 flex items-center justify-around ">
     
     <!----------------------menue icon ------------------------->
     <img src="../../assets/img/iconoir_menu.svg" alt="menu-icon" class="w-7 h-7 hover:cursor-pointer" >

     <!----------- SEARCH BOX ------------->
     <search-box ></search-box>

     <!------------------------superz logo -------------->
    <a href="#"> <img src="../../assets/img/LogoType.svg" alt="Logo" class="w-32 h-8"> </a>


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


