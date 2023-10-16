<template>
   <div class="fixed h-screen p-4 w-full"> 
        <nuxt-link to="/dashboard" class="h-4 w-4  text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </nuxt-link>

        <div class="my-6  flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Referrals</span>
            <span class="text-gray-400 text-xs">Send referral codes to friends and receive
                rewards</span>
        </div> 


        <div class=" p-4 bg-[#0d1b2f] rounded-md">
           <h1 class="text-lg">Referral</h1>
            <div class="w-full flex justify-between items-center text-sm my-1 text-gray-500">
                <span>Total No of referral</span>
                <span>0</span>
            </div>
            <div class="w-full flex justify-between items-center text-sm text-gray-500">
                <span>Total No of referral</span>
                <span>0</span>
            </div>
        </div>
        
        <div class=" p-4 my-2 bg-[#0d1b2f] rounded-md">
            <h1 class="text-center my-1 text-lg">Refer and Earn Crytocurrency</h1>
            <p class="text-center text-sm text-gray-500 mb-5">Refer a friend or family member and earn when 
                they carry out their first transaction on crypto.
                refer someone today.
            </p>
            <span class="text-center text-sm text-gray-500 ">Your Referral Link</span>
                
            <form class="w-full flex flex-col mt-2"> 
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative mb-4">
                    <input type="text" id="referral code" class="block w-full p-3  text-sm text-gray-400 rounded-md border-none focus:ring-transparent 
                    bg-[#000F24]" value="htttps://jbjjjnkjj" disabled>
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5  bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                    hover:bg-gradient-to-l focus:ring-1focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-2.5 py-1 ">Copy</button>
                </div>


                <div class="w-full mt-4">
                    <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                    hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                    rounded-md  p-3 text-center">Share Now</button>

                </div>  
            </form>
        </div>
   </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
})

</script>