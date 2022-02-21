<template>
  <div class="grid grid-cols-10 justify-items-center md:gap-x-16">
    <the-header class="col-span-full"> </the-header>
    <products class="col-span-full md:col-start-1 md:col-end-9"> </products>
    <filters class="md:col-start-9"> </filters>

  </div>
</template>

<script>
import Filters from '@/components/filters/Filters.vue'
import Header from '@/components/header/Header.vue'
import Products from '@/components/products/Products.vue'
export default {
  components:{
    'filters': Filters,
    'the-header': Header,
    'products': Products
 }
}
</script>
