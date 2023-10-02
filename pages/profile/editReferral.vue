<template>
   <div class="fixed h-screen p-4 w-full"> 
        <nuxt-link to="#" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </nuxt-link>

        <div class="my-4 flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Next Of Kin</span>
            <span class="text-gray-400 text-xs">Please input the full name and phone no of 
                your next of kin</span>
        </div> 
   </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
})

</script>