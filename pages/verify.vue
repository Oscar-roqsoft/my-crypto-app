<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="#" class="h-4 w-4 text-white relative z-30">
           <IconsArrowBack class="text-xl"/>
       </nuxt-link>

       <div class="my-5 flex flex-col">
           <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Verification</span>
           <span class="text-gray-400 text-xs">Check your <span class="underline text-[#25FEB7]">ch***@***.com</span> a code has been sent</span>
       </div> 

       <form class="w-full flex flex-col "> 
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative mb-4">
                <input type="search" id="search" class="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-md
                 bg-gray-50" placeholder="Enter email verification code" required>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5  bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-l focus:ring-1focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-4 py-2 ">Resend code</button>
            </div>
    

           <div class="w-full my-4">
                <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-4 text-center">Submit</button>

           </div>  
       </form>
     
   </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})
</script>