<template>
    <div class=" h-full overflow-y-scroll">
        <div class="flex bg-[#0d1b2f] justify-between p-4 w-full">
            <nuxt-Link to="/dashboard">
                <IconsArrowBack />
            </nuxt-Link>
            <span for="countries" class="block mb-2 text-sm font-medium text-white">Notification</span>
            <span class="h-4 w-4"></span>
        </div>

        <div class="bg-[#0d1b2f] p-4 mt-3 min-h-[89vh]">
            <div class="flex justify-end w-full mb-6 ">
                <a @click="read=false" class="bg-[#262c33] px-3 py-1 rounded-lg text-xs">Mark read all</a>
            </div>
             
            <div v-for="i in 3"
            class="py-4 border-b-[0.1px] border-gray-400">
                <div class="grid grid-cols-5  items-center">
                    <div class="w-full inline-flex justify-center items-center text-xl">
                        <IconsMessage :fill="'#1DC7AC'"/>
                    </div>
                    <div class="col-span-4 leading-relaxed"  :class="read===true?'text-[#1DC7AC]':''">
                        <h2 class="text-sm">
                            An update is available
                        </h2>
                        <p class="text-xs "  :class="read===true?'text-[#498279]':'text-gray-400'">30 new coins has been updated lorem ipsum dolor sit...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
});

const read= ref(true)

</script>