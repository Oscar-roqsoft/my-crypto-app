<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="/profile" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </nuxt-link>

        <div class="mt-6 mb-8 flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Identity verification</span>
            <span class="text-gray-400 text-xs">Verify your identity to unlock more feature
                on crypto</span>
        </div> 
        

        <div class="w-full">
            <div class="flex  items-center mt-4">
                <nuxt-Link to="/profile/uploadDoc" class="p-3 bg-slate-700 rounded-full inline-flex text-xl justify-center items-center mr-2">
                    <IconsEdit/>
                </nuxt-Link>
                <span class="text-sm text-gray-400">Upload a valid identity document</span>
            </div>
            <div class="flex  items-center mt-4">
                <div class="p-3 bg-slate-700 rounded-full inline-flex text-xl  justify-center items-center mr-2">
                    <IconsEdit/>
                </div>
                <span class="text-sm text-gray-400">Upload a valid identity document</span>
            </div>
            <div class="flex  items-center mt-4">
                <div class="p-3 bg-slate-700 rounded-full inline-flex text-xl  justify-center items-center mr-2">
                    <IconsEdit/>
                </div>
                <span class="text-sm text-gray-400">Upload a valid identity document</span>
            </div>
        </div>

        <div class="my-8">
            <p class="text-center text-sm text-gray-400">By choosing ‘’Approving’’, you grant crypto permission
                to process your personal information to unlock
                more features. </p>
        </div>

        <div class="w-full mt-4">
            <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
            hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
            rounded-md  p-3 text-center">Approve</button>

        </div>  

        <div class="w-full mt-4">
            <button type="button" class="text-white w-full bg-[#0d1b2f]
            hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
            rounded-md  p-3 text-center">Decline</button>

        </div>  
    </div>
</template>



<script setup>
definePageMeta({
    layout: 'custom',
})
</script>