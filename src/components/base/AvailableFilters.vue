<template>
    <div class="w-60 h-24 bg-secondary-light p-4 text-right rounded-md flex flex-col gap-4 justify-center">
        <h2 class="font-bold text-base">فیلتر های اعمال شده</h2>
        
        <!--------------------- available filters list ---------------------->
        <div class="available-filters flex gap-2 justify-end">
            <div v-for="filters in availableFilters" :key="filters" class="bg-white pt-1 pb-1 pr-2 pl-2 rounded-2xl">{{filters}} <button>X</button></div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            availableFilters:[
                'مرتبط تر',
                'کنسرو لوبیا'
            ]
        }
    }
}
</script>