<template>
    
    <div class="min-h-full w-full overflow-y-scroll pb-10">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-4 items-center">
            <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>

            <div class="col-span-3 capitalize text-sm">
                add coin
            </div>
        </div>

        

        <form class="col-span-4 w-full px-4 py-6">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input  type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-white 
                border-none focus:ring-transparent rounded
                bg-[#0d1b2f] " placeholder="Search coins .." required>
            </div>
        </form>
        
        <div class="px-4">
             
            <div 
            class="bg-[#0d1b2f] rounded border-[0.5px] border-gray-600">

                <div  v-for="i in 12"
                class="flex justify-between items-center p-3  border-b-[0.1px] border-gray-700 text-sm">
                    <div class="flex justify-between items-center">
                        <iconsBtcColored class="mr-2 text-3xl"/>
                        <div>
                            <h2 class="text-[11px]">BTC</h2>
                            <div class="text-[10px]">
                                <span>19000</span>
                                <span class="text-red-400 ml-2">+24%</span>
                            </div>
                        </div>
                    </div>
                    <radio/>
                </div>

            </div>
        </div>

    </div>


</template>





<script setup>
definePageMeta({
    layout: 'custom',
})
</script>   