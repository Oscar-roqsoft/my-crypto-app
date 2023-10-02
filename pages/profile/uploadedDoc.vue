<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="/profile/uploadDoc" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </nuxt-link>


        <div class="p-4 my-10 bg-[#0d1b2f] rounded-md grid grid-cols-3 gap-3">
            <div class="  bg-gray-700 flex flex-col justify-center items-center rounded-md">
                <IconsHome class="text-4xl"/>
                <span class="text-[11px] text-gray-300">Tap camera</span>
            </div>

            <div class=" col-span-2 px-2 block">
                <div class="w-full h-2 mb-1.5 bg-gray-700 rounded-full"></div>
                <div class="w-[80%] h-2 mb-1.5 bg-gray-700 rounded-full"></div>
                <span class="px-4 py-1 mb-1.5 flex">
                    <div class="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div class="h-4 w-4 bg-red-700 mx-2 rounded-full"></div>
                    <div class="h-4 w-4 bg-blue-700 rounded-full"></div>
                </span>
                <div class="grid grid-cols-5 gap-2">
                    <div  class="w-full h-2 mb-1.5 bg-gray-700 rounded-full"></div>
                    <div  class="w-full h-2 mb-1.5 bg-gray-700 rounded-full col-span-4"></div>
                </div>
                <div class="grid grid-cols-5 gap-2">
                    <div  class="w-full h-2 mb-1.5 bg-gray-700 rounded-full"></div>
                    <div  class="w-[80%] h-2 mb-1.5 bg-gray-700 rounded-full col-span-4"></div>
                </div>
                <div class="grid grid-cols-5 gap-2">
                    <div  class="w-full h-2 mb-1.5 bg-gray-700 rounded-full"></div>
                    <div  class="w-[60%] h-2 mb-1.5 bg-gray-700 rounded-full col-span-4"></div>
                </div>
            </div>
        </div>

        
        <div class="w-full mt-4 absolute bottom-10 left-0 px-4 text-center">
            <span class=" text-sm text-gray-400">Tap camera to upload your document</span>
            <nuxt-Link to="/profile/facialVerify" type="button" class="text-white w-full bg-gradient-to-r mt-4 from-[#25FEB7] via-green-400 to-[#1DC7AC]
            hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
            rounded-md  p-3 text-center">Next</nuxt-Link>

        </div> 
    </div>

</template>


<script setup>
definePageMeta({
    layout: 'custom',
})
</script>