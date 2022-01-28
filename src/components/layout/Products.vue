<template>
    <section class="grid md:grid-cols-4 gap-y-11 md:w-9/12 ml-12 justify-between">
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
import ProductCard from '../base/BaseProductCard.vue'
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