<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="verifyNumber" class="h-4 w-4 text-white relative z-30">
           <IconsArrowBack class="text-xl"/>
       </nuxt-link>

       <div class="my-5 flex flex-col">
           <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Username Tag</span>
           <span class="text-gray-400 text-xs">Enter your  username tag</span>
       </div> 

       <form class="w-full flex flex-col "> 
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative mb-4">
                <input type="search" id="search" class="block w-full p-4  text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="Enter Username" required>
            </div>
    

           <div class="w-full my-4">
                <nuxt-Link to="/sign-up/selectPin" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-4 text-center">Proceed</nuxt-Link>

           </div>  
       </form>
     
   </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})
</script>