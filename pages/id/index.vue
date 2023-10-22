<template>
    <div class="fixed w-full h-screen">
        <div class="bg-[#0d1b2f] px-4 pt-4 py-6 grid grid-cols-4 items-center">
            <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>

            <div class=" capitalize text-sm flex items-center col-span-2">
                <iconsBtcColored class="text-4xl"/>
                <div class="flex flex-col mx-1">
                    <span class="text-xs">0.234 BTC</span>
                    <span class="text-xs text-gray-400">USDT 4000</span>
                </div>
            </div>
             
            <div class=" flex justify-center items-center">
                <button class="py-2 px-3 text-xs capitalize ring-[0.5px] ring-green-500 hover:bg-green-500 text-gray-200 rounded">address</button>
            </div>
        </div>

       


        <div class="bg-[#0d1b2f] grid grid-cols-2 gap-6 fixed bottom-0 left-0 w-full p-4">
            <button class="py-4 px-3 text-xs capitalize ring-[0.5px] ring-red-500 text-gray-200 rounded-md">sell</button>
            <button class="py-2 px-3 text-xs capitalize ring-[0.5px] ring-green-500 text-gray-200 rounded-md">buy</button>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout:"custom"
})

</script>