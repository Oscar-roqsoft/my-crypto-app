
<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="/profile/uploadDoc" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </nuxt-link>

        <div class="my-6 flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Face verification</span>
            <span class="text-gray-400 text-xs">Verify identity and unlock new levels.</span>
        </div>


        <div class="w-full mt-4">
            <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
            hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
            rounded-md  p-3 text-center">Verify Identity</button>

        </div>  

        <div class="w-full mt-4">
            <button type="button" class="text-white w-full bg-[#0d1b2f]
            hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
            rounded-md  p-3 text-center">I'll do that later</button>

        </div>  
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
})
</script>