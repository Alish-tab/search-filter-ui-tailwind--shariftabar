<template>
    <div class="w-60 h-64 bg-secondary-light p-4 rounded-md relative flex flex-col gap-2">

    <!-------------- Title Div --------->
        <div class="flex justify-between items-center hover:cursor-pointer">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#27272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2>مرتب سازی بر اساس</h2>
        </div>

    <!-------------------------search div ------------------------>
        <form>

        <!--------------------- search Input ----------------------------->
        <input type="text" placeholder="جستجو در فروشگاه ها" class="w-full border rounded-3xl border-secondary-dark outline-none 
        placeholder:absolute placeholder:right-10 text-right p-1 pr-10 bg-secondary-light"/>

        <!--------------------- magnifier icon ---------------------------->
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
         class="inline-block -ml-8">
        <path d="M11.5 11.5L15 15" stroke="#27272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 7C1 7.78793 1.15519 8.56815 1.45672 9.2961C1.75825 10.0241 2.20021 10.6855 2.75736 11.2426C3.31451 11.7998 3.97595 12.2417 4.7039 12.5433C5.43185 12.8448 6.21207 13 7 13C7.78793 13 8.56815 12.8448 9.2961 12.5433C10.0241 12.2417 10.6855 11.7998 11.2426 11.2426C11.7998 10.6855 12.2417 10.0241 12.5433 9.2961C12.8448 8.56815 13 7.78793 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1C5.4087 1 3.88258 1.63214 2.75736 2.75736C1.63214 3.88258 1 5.4087 1 7V7Z" stroke="#27272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    </form>

    <!-------------------------Shops list ------------------------>
    <form class="flex flex-col p-1 gap-0.5" >
        <div v-for="shop in shops" :key="shop.title" class=" flex items-center justify-end">
            <label :for="shop.title" class="text-base mr-2">{{shop.title}}</label>
            <input type="checkbox" name="shop" :checked="shop.isActive">
        </div>
    </form>

    </div>
</template>

<script>
export default {
    data() {
        return{
            shops:[
                {
                    title:'دیجی کالا',
                    isActive:true
                },
                {
                    title:'دو سوته',
                    isActive:false
                },
                {
                    title:'هایپرباز',
                    isActive:true
                },
                {
                    title:'والمارکت',
                    isActive:false
                },
                {
                    title:'اسنپ مارکت',
                    isActive:false
                },
                {
                    title:'باسلام',
                    isActive:false
                },
            ]
        }
    }
}
</script>