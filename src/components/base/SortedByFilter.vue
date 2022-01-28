<template>
    <div class="w-60 h-56 bg-secondary-light p-4 rounded-md relative">

    <!-------------- Title Div --------->
        <div class="flex justify-between items-center hover:cursor-pointer">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#27272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2>مرتب سازی بر اساس</h2>
        </div>

    <!----------------- radio options Div ---------------->
        <form class="flex flex-col p-2 gap-1 absolute right-4">
            <div v-for="option in options" :key="option.title" class=" flex items-center justify-end">
                <label :for="option.title" class="text-base mr-2">{{option.title}}</label>
                <input type="radio" :id="option.title" name="sorted-by" :value="option.title" :checked="option.isActive">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
            options:[
                {
                    title:'مرتبط تر',
                    isActive:true
                },
                {
                    title:'ارزان تر',
                    isActive:false
                },
                {
                    title:'گران تر',
                    isActive:false
                },
                {
                    title:'جدید تر',
                    isActive:false
                },
                {
                    title:'پرتخفیف تر',
                    isActive:false
                },
                {
                    title:'محبوب تر',
                    isActive:false
                },
            ]
        }
    }
}
</script>