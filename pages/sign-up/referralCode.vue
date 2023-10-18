<template>
    <div class="fixed h-screen p-4 w-full">
        <div @click="navigateTo('#')" class="h-4 w-4 text-white relative z-30">
           <IconsArrowBack class="text-xl"/>
       </div>

       <div class="my-5 flex flex-col">
           <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Referral Code</span>
           <span class="text-gray-400 text-xs">If you were reffered by someone you can enter 
            the  referall code</span>
       </div> 

       <form class="w-full flex flex-col "> 
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative mb-4">
                <input type="number" id="number" class="block w-full p-4  text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="Input Referral Code" required>
            </div>
    

           <div class="w-full my-4">
                <nuxt-Link to="/sign-up/succesful" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-3 text-center">Proceed</nuxt-Link>
                 <nuxt-Link to="/sign-up/succesful" type="button" class="text-white mt-4 w-full bg-[#0d1b2f]
                     rounded-md  p-3 text-center">Skip this instead</nuxt-Link>


           </div>  
       </form>
     
   </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})
</script>