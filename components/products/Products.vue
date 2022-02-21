<template>
    <section class="grid grid-cols-2 gap-x-5  md:grid-cols-3  lg:grid-cols-4  md:gap-x-3 lg:gap-x-20 gap-y-11 ">
        <product-card
        v-for="product in products"
        :key="product.title"
        :title="product.title"
        :price="product.price"
        :discount="product.discount"
        :discountedPrice="product.discountedPrice"
        ></product-card>
    </section>
</template>

<script>
import ProductCard from '../cards/BaseProductCard.vue'
export default {
    components:{
        ProductCard
    },
    data() {
        return{
            products:[
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:true,
                    discountedPrice:'11,480'
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:true,
                    discountedPrice:'11,480'
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:false
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:false
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:true,
                    discountedPrice:'11,480'
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:false
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:true,
                    discountedPrice:'11,480'
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:true,
                    discountedPrice:'11,480'
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:true,
                    discountedPrice:'11,480'
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:false
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                    discount:true,
                    discountedPrice:'11,480'
                },
                {
                    title:'...اسم محصول',
                    price:'16,000',
                   discount:true,
                    discountedPrice:'11,480'
                },
            ]
        }
    }
}
</script>