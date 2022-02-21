<template>
    <div class="bg-white w-36 md:w-40 h-56 text-right">
        <div class="w-full h-40 p-4 border border-secondary-dark rounded-lg mb-2">
            <div class="bg-secondary-dark w-full h-full"></div>
        </div>

        <h2 class="mb-1 text-sm md:text-base">{{title}}</h2>

        <div>
            <p class="inline-block mr-1 text-blue-500 text-sm" v-if="discount ? prosuctPrice = discountedPrice : prosuctPrice = price">از {{prosuctPrice}} تومان</p>
            <span class="bg-OffRed rounded-xl w-7 h-4 text-xs inline-block text-white text-center " v-if="discount === true">30%</span>
            <p class="text-gray-400 line-through decoration-1 text-sm" v-if="discount === true">از{{price}}تومان</p>
        </div>
    </div>
</template>


<script>
export default {
    props:['title' , 'price' , 'discount' , 'discountedPrice'],

    data() {
        return{
            prosuctPrice: ''
        }
    }
}
</script>