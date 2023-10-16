<template>
    <div class="fixed h-screen w-full">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-4">
            <nuxt-link to="/dashboard" class="h-4 w-4 text-white relative z-30">
                <IconsArrowBack class="text-xl"/>
            </nuxt-link>

            <div class="col-span-3 capitalize text-sm">
                new payment method
            </div>
        </div>


        <form class="px-4 mt-10">
            
            <div class="mb-4">
                <label for="Bank Name" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="Bank Name" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Bank Name" required>
                   
                </div>
            </div> 

            <div class="mb-4">
                <label for="Account Number" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="number" id="Account Number" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Account Number" required>
                   
                </div>
            </div> 

            <div class="mb-14">
                <label for="Account Name" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="Account Name" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Account Name" required>
                   
                </div>
            </div> 
            

            <nuxt-Link to="#" class="w-full my-4">
                <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-3 text-center">Confirm</button>
    
           </nuxt-Link>  
        </form>
    </div>
</template>





<script setup>
definePageMeta({
    layout: 'custom',
})
</script>