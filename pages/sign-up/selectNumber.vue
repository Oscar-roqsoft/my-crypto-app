<template>
    <div class="fixed h-screen p-4 w-full">
        <div @click="navigateTo('/sign-up/selectCountry')"  class="h-4 w-4 text-white relative z-30">
           <IconsArrowBack class="text-xl"/>
       </div>

       <div class="my-6 flex flex-col">
           <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Enter Phone No</span>
           <span class="text-gray-400 text-xs">Enter your country phone number</span>
       </div> 

       <form class="w-full flex flex-col "> 
           



            <div class="flex mb-6">
                <select id="countries" class="bg-[#0d1b2f] border-none  text-white text-sm rounded-s-md  block  focus:ring-transparent  p-4 ">
                    <option selected>+234</option>
                    <option v-for="i in countryCodes">+{{ i }}</option>
                  </select>
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative w-full">
                    <input type="number" id="search" class="block w-full p-4  text-sm border-none focus:ring-transparent  text-white rounded-e-md
                    bg-[#0d1b2f]" placeholder="Enter email verification code" required>
                </div>
            </div>
    

           <div class="w-full">
                <nuxt-Link to="/sign-up/selectUsername" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
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


// import { onMounted } from 'vue'
// import { initFlowbite } from 'flowbite'

// // initialize components based on data attribute selectors
// onMounted(() => {
//     initFlowbite();
// })

const countryCodes =[34,12,78,923,234,233]
</script>