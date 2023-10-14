<template>
    <div class="w-full min-h-[100%] pb-12   overflow-x-scroll">
      <div class="bg-[#0d1b2f] pt-4 mb-4">

          <div class="grid grid-cols-3 items-center gap-6 border-y border-gray-600 py-3 px-4">
              <div v-for="i in 3" class="inline-flex justify-center items-center text-xs py-2.5 px-3 bg-green-400 rounded">
                 <button>Spot account</button>
              </div>
          </div>
            
     
            <div class="p-4 flex flex-col my-4">
                <span class="text-gray-400">Value(USDT)</span>
                <div  class="flex items-center mb-4">
                    <span v-if="visible" class="text-4xl font-semibold mr-3">0.00</span>
                    <span v-else class="text-4xl font-semibold mr-2">****</span>
                    <button @click="toggleVisible" class="text-xl"   v-if="visible">
                        <IconsVisible/>
                    </button>
                    <button @click="toggleVisible" class="text-xl" v-else>
                        <IconsInvisible/>
                    </button>
                    
                </div>
    
                <div class="grid grid-cols-3 items-center gap-6  py-3">
                    <div v-for="i in 3" class="inline-flex justify-center items-center text-xs p-2.5 bg-green-400 rounded">
                       <button>Deposit</button>
                    </div>
                </div>
            </div>
      </div>

        <div class="bg-[#0d1b2f] h-full p-3">
            <div class="flex justify-between">
                <span >Crypto assets</span>
                 <button class="flex justify-center items-center text-[#1DC7AC]">
                    <span>Add coin</span>
                    <IconsPlus colorchange="#1DC7AC"  class="text-xl ml-1"/>
                </button>
            </div>

            <div class="mt-10">
                <div v-for="i in 4"
                class="flex justify-between p-3 mb-2 bg-[#262c33] rounded">
                    <div class="flex justify-center items-center ">
                        <div class="h-10 w-10 rounded-full bg-yellow-400 mr-2"></div>
                        <div class="flex flex-col">
                            <span class="text-lg">USBT</span>
                            <span class="text-xs text-gray-400">USDT(0.00)</span>
                         </div>
                    </div>

                    <div class="flex flex-col justify-center items-center">
                        <div class="text-lg">1.00</div>
                        <div class="bg-[#48615b]  p-1 rounded-xl inline-flex justify-center items-center text-[10px]">
                            +26.99%
                        </div>
                    </div>
                </div>
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
 

 

 
 </script>