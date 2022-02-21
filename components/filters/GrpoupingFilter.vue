<template>
    <div class="w-60 h-40 bg-secondary-light p-4 rounded-md ">
        <!-------------- Title Div --------->
        <div class="flex justify-between items-center hover:cursor-pointer">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#27272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2>دسته بندی</h2>
        </div>

        <!----------------- Subgroup Div ---------------->
        <div class="flex flex-col text-right p-4 pt-2 gap-1">
            <span v-for="(item,index) in subGroup" :key="item" class="text-sm">
                {{item}}
                <button v-if="index > 1" class="text-primary -mr-2">+</button></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            subGroup:[
                'متفرقه',
                'کنسرو و کمپوت',
                'خار و بار',
                'کالاهای غیرخوراکی'
            ]
        }
    }
}
</script>