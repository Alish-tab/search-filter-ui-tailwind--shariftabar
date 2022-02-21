<template>
  <div>
    <the-header class="w-full"> </the-header>
    <products class="w-11/12 ml-20 mb-16"> </products>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Products from '@/components/products/Products.vue'
export default {
  components:{
    'the-header': Header,
    'products': Products
 }
}
</script>
