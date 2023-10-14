<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="/dashboard/profile/identityVerify" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </nuxt-link>

        <div class="mt-6 mb-8 flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Upload Document</span>
            <span class="text-gray-400 text-xs">Select an option and upload your document
                on crypto</span>
        </div>

        <form>

            <div v-for="item in documents" class="p-4 my-2 bg-[#0d1b2f] rounded-md">
                <div class="flex justify-between items-center">
                    <span>{{ item.type }}</span>
                        <input type="radio"  name="identity" :value="item.checkboxname"  class="rounded-full border-none focus:ring-transparent"/>       
                </div> 
            </div>

            
            <div class="w-full mt-4 absolute bottom-10 left-0 px-4">
                <nuxt-Link to="/dashboard/profile/uploadedDoc" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                rounded-md  p-3 text-center">Next</nuxt-Link>

            </div> 
        </form>
        


    </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})

const  documents =[
    {
        id:1,
        type:"National identification no",
        checkboxname:"National Id"
    },
    {
        id:1,
        type:"National identification no",
        checkboxname:"Voters Id"
    },
    {
        id:1,
        type:"National identification no",
        checkboxname:"passport Id"
    },
    {
        id:1,
        type:"National identification no",
        checkboxname:"drivers Id"
    }
]
</script>