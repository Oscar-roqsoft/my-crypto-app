<template>
    <div class="w-full min-h-[100%] pb-12   overflow-x-scroll">
        <div class="bg-[#0d1b2f] mb-4">

        
            
     
            <div class="p-4 flex flex-col my-4">
                <span class="text-gray-400">Value(USDT)</span>
                <div  class="flex items-center">
                    <span v-if="visible" class="text-4xl font-semibold mr-3">0.00</span>
                    <span v-else class="text-4xl font-semibold mr-2">****</span>
                    <button @click="toggleVisible" class="text-xl"   v-if="visible">
                        <IconsVisible/>
                    </button>
                    <button @click="toggleVisible" class="text-xl" v-else>
                        <IconsInvisible/>
                    </button>
                    
                </div>

                <div class="my-4 flex flex-col">
                    <span class="text-xs text-green-400">locked coin</span>
                    <span>0.00</span>
                </div>
    
               <!-- funding types -->
               <div class="grid grid-cols-3 items-center gap-3 py-3">
                    <div v-for="fund in fundTypes" class="inline-flex justify-center items-center text-xs p-2 transition  hover:text-white
                     text-gray-300  hover:bg-green-400 bg-[#000F24] rounded">
                       <nuxt-link :to="`/${fund.link}`" class="capitalize">{{ fund.title }}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
  
        <div class="flex justify-center items-center w-full mt-8">
            <div class="grid grid-cols-2 bg-[#0d1b2f] gap-2 p-2 rounded-sm">
                <button class="p-2 text-xs hover:bg-green-400 hover:text-white text-gray-300 bg-[#000F24]  rounded ">deposit orders</button>
                <button class="p-2 text-xs hover:bg-green-400 hover:text-white text-gray-300 bg-[#000F24] rounded">withdrawal orders</button>
            </div>
        </div>
  
    </div>
 </template>



 
 
 <script setup>
 definePageMeta({
     layout: 'custom',
 })

 const visible =ref(false)

 const toggleVisible =()=>{
    visible.value =!visible.value
 }
 


 const fundTypes = [
    {title:"transfer fund",link:"fundTransfer"},
    {title:"add bank info",link:"addBankinfo"},
    {title:"set rate",link:"setRate"},
]
 
 </script>