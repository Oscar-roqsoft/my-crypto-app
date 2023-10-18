
<template>
    <div class="fixed h-screen p-4 w-full">
         <div @click="navigateTo('/dashboard')" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </div>

        <div class="my-4 flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Link Bank</span>
            <span class="text-gray-400 text-xs">Link your bank to crypto and easily deposit
                and withdraw.</span>
        </div> 

        <form class="w-full flex flex-col "> 
            <div class="my-4 flex flex-col w-full">
              
                <div class="mt-10">
                    <label for="Name" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                    <div class="bg-[#0d1b2f] grid grid-cols-4 items-center h-16 rounded-md">
                        <nuxt-Link to="#" class="w-full flex justify-center items-center">
                            <div class="h-9 w-9 bg-[#25FEB7] rounded-full inline-flex justify-center items-center shadow-2xl">
                                <IconsPlus class="text-3xl drop-shadow-2xl "/>
                            </div>
                        </nuxt-Link>
                        <div id="Full Name" class=" col-span-3    text-sm text-white border-none focus:ring-transparent    rounded-md" >
                            Link bank account
                        </div>

                    </div>

                </div>
              
              
            </div>

            <nuxt-Link to="#" class="w-full my-4 absolute bottom-10 left-0 px-4 ">
                 <button type="button" class="text-white w-full  bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                  hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                  rounded-md  p-3 text-center">Save</button>
            </nuxt-Link>  
        </form>
      
    </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})
</script>