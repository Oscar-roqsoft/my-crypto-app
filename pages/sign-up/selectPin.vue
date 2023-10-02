<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="#" class="h-4 w-4 text-white relative z-30">
           <IconsArrowBack class="text-xl"/>
       </nuxt-link>

       <div class="my-5 flex flex-col">
           <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Enter Pin</span>
           <span class="text-gray-400 text-xs">Set a pin to secure your crypto account</span>
       </div> 

       <form class="w-full flex flex-col "> 
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative grid grid-cols-5 gap-2 my-7">
                <input type="text"  maxlength="1" id="number" class="block w-full p-4  text-center  text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="" required>
                <input type="text" id="text" class="block w-full p-4  text-center  text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="" required>
                <input type="text" id="text" class="block w-full p-4  text-center text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="" required>
                <input type="text" id="text" class="block w-full p-4   text-center text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="" required>
                <input type="text" id="text" class="block w-full p-4  text-center  text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="" required>
            </div>
    

           <div class="w-full my-4">
                <nuxt-Link to="/sign-up/referralCode" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-3 text-center">Proceed</nuxt-Link>

           </div>  
       </form>
     
   </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})
</script>