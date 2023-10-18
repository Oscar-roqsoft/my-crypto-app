
<template>
    <div class="fixed h-screen p-4 w-full">
         <div @click="navigateTo('#')" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </div>

        <div class="my-4 flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Sign in</span>
            <span class="text-gray-400 text-xs">Set a pin to secure your crypto account</span>
        </div> 

        <form class="w-full flex flex-col "> 
            <div class="my-4 flex flex-col w-full">
              
                <div class="mb-6">
                    <label for="Email" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                    <div class="relative">
                        <input type="Email" id="Email" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent    rounded-md
                        bg-[#0d1b2f]" placeholder="Email" required>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="Password" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div class="relative">
                        <input type="Password" id="password" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                        bg-[#0d1b2f]" placeholder="Password" required>
                       
                    </div>
                </div> 
                <a @click="navigateTo('/reset')" class="text-sm text-green-300">forgot password</a>
            </div>

            <nuxt-Link to="verify" class="w-full my-4">
                 <!-- <button class="bg-green-600 w-full py-4 px-4 rounded-md ring-1 ring-green-300"></button> -->
                 <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                  hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                  rounded-md  p-3 text-center">Proceed</button>

            </nuxt-Link>  
        </form>
      
    </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})
</script>