<template>
   <div class="w-full h-full  pt-4 pb-20 overflow-x-scroll">

        <!-- <NavMenu/> -->
        <div class="grid grid-cols-6 px-4">
            <div class="h-9 w-9">
                <img class="w-full" src="/home-img/profile-Pics.png" alt="">
            </div>

            <form class="col-span-4 w-full">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-white border-none focus:ring-transparent rounded-xl
                    bg-[#0d1b2f] " placeholder="Search spot, futures.." required>
                </div>
            </form>
            
            <nuxt-link to="#" class="inline-flex justify-center pt-2 text-xl">
                <IconsBell />
            </nuxt-link>
            
        </div>

        <!-- carousel slide section -->
        <div class="py-6 relative px-4">
            <div v-for="(i,index) in 4" :key="index" class="rounded-lg relative overflow-hidden">
                <div v-if="index===count">
                    <img class="transition" src="/home-img/carousel-img.png" alt="">
                </div>
            </div>
            <div  class="flex justify-center items-center">
                <div v-for="(i,index) in 4" :key="index" class="flex mr-1 mt-2">
                    <div class="h-3 w-3 bg-slate-50 rounded-full" :class="index===count?'bg-green-500':''"></div>
                </div>
            </div>
        </div>

        <div>
            <div class="flex justify-between items-center px-3">
                <div v-for="i in 4">
                    <nuxt-link   to="#" class=" flex flex-col items-center px-2" >
                          <IconsDeposit class="my-2" fill="white"/> 
                          <span class="text-xs text-gray-400">Deposit</span>
                    </nuxt-link>
                </div>
            </div> 
        </div>

         <Marketplace/>

   </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
}) 



let count= ref(1);
let intervalCounter = ref(null);

intervalCounter.value = setInterval(()=>{
    count.value++
    if(count.value === 4){
        count.value=0
    }
},2000);

onUnmounted(() => {
    console.log(intervalCounter.value);
    clearInterval(intervalCounter.value);
    console.log(intervalCounter.value)
})

</script>

