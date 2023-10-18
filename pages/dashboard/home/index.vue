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
                    <input v-model.trim="searchInput" type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-white border-none focus:ring-transparent rounded-xl
                    bg-[#0d1b2f] " placeholder="Search spot, futures.." required>
                </div>
            </form>
            
            <button  @click="navigateTo('/dashboard/home/notification')" class="inline-flex justify-center mt-2 text-xl">
                <IconsBell />
            </button>
            
            
        </div>

        <!-- carousel slide section -->

        <CarouselSlide/>

        <div>
            <div class="flex justify-between items-center px-3">
                <div v-for="item in homelinks">
                    <button   class=" flex flex-col items-center py-1 rounded-md px-2 hover:shadow hover:shadow-gray-900" >
                          
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="#1DC7AC" :d="item.fill"></path></svg>
  
 
                          <span class="text-xs text-gray-400 capitalize">{{ item.title }}</span>
                    </button>
                </div>
            </div> 
        </div>

         <Marketplace :filterInput="searchInput"/>

   </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
});

const searchInput = ref("");

const homelinks =[
    {
       id:1,
       fill:"M1 4.5A.5.5 0 0 1 .5 4V1A.5.5 0 0 1 1 .5h12a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5",
       title:"deposit"
    },
    {
        id:1,
        fill:"M12 12a3 3 0 1 0 3 3a3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm-.71-6.29a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21L15 7.46A1 1 0 1 0 13.54 6l-.54.59V3a1 1 0 0 0-2 0v3.59L10.46 6A1 1 0 0 0 9 7.46ZM19 15a1 1 0 1 0-1 1a1 1 0 0 0 1-1Zm1-7h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3ZM5 15a1 1 0 1 0 1-1a1 1 0 0 0-1 1Z",
        title:"withdraw"
    },
    {
        id:2,
        fill: "M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038t.525-.887q-.1-.25-.15-.525T7.5 8q0-.95.513-1.688T9.35 5.226q.5-.575 1.175-.9T12 4q.8 0 1.475.325t1.175.9q.825.35 1.338 1.088T16.5 8q0 .275-.05.55t-.15.525q.35.4.525.888T17 11q0 1.25-.875 2.125T14 14h-4Zm-4 8q-.825 0-1.413-.588T4 20v-.8q0-.85.438-1.563T5.6 16.55q1.55-.775 3.15-1.163T12 15q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 19.2v.8q0 .825-.588 1.413T18 22H6Z",
        title:"referrals"
    },
    {
        id:1,
        fill:"M4.25 18.3q-.95-1.1-1.525-2.45T2 13h2.05q.15 1.1.55 2.087T5.65 16.9l-1.4 1.4ZM2 11q.2-1.5.75-2.85t1.5-2.45l1.4 1.4Q5 7.925 4.6 8.913T4.05 11H2Zm8.95 10.95q-1.5-.15-2.837-.725T5.65  19.75l1.4-1.45q.875.65 1.838 1.075t2.062.575v2ZM7.1 5.7L5.65 4.25q1.125-.9 2.463-1.475T11 2.05v2q-1.125.15-2.1.575T7.1   5.7Zm2.4 10.8v-9l7 4.5l-7 4.5Zm3.5 5.45v-2q3.025-.425 5.013-2.675T20 12q0-3.025-1.988-5.275T13 4.05v-2q3.85.425 6.425 3.25T22 12q0   3.875-2.575 6.7T13 21.95Z",
        title:"tutorials"   
    }

]


</script>

