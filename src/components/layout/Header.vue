<template>
 <div class="bg-white p-4 pl-14 justify-between border-b border-secondary-dark w-full h-14 flex items-center mb-10 md:justify-around md:h-20 md:pl-12 md:pr-12">
     
     <!----------------------menue icon ------------------------->
     <img src="../../assets/img/iconoir_menu.svg" alt="menu-icon" class=" w-6 h-6 hover:cursor-pointer order-2 md:w-7 md:h-7 md:order-none" >

     <!----------- SEARCH BOX ------------->
     <search-box class="order-0 md:order-none"></search-box>

     <!------------------------superz logo ----------------->
    <a href="#"> <img src="../../assets/img/LogoType.svg" alt="Logo" class=" w-24 h-7 order-1 md:w-32 md:h-8 md:order-none"> </a>


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


