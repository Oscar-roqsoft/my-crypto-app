<template>
    <div class="w-full min-h-[100%] pb-12   overflow-x-scroll">
        <div class="bg-[#0d1b2f] mb-4">

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
    
                <div class="grid grid-cols-3 items-center gap-3 py-3">
                    <div v-for="fund in fundTypes" class="inline-flex justify-center items-center text-xs p-2 shadow hover:text-white text-gray-300 
                     hover:bg-green-400 bg-[#000F24] rounded">
                       <button @click="navigateTo(`${fund.link}`)"  class="capitalize ">{{ fund.title }} fund</button>
                    </div>
                </div>
            </div>
      </div>

        <div class="bg-[#0d1b2f] h-full p-3">
            <div class="flex justify-between text-sm capitalize">
                <span >Crypto assets</span>
                 <button @click="navigateTo('/addCoin')" class="flex justify-center items-center text-[#1DC7AC]">
                    <span>Add coin</span>
                    <IconsPlus colorchange="#1DC7AC"  class="text-xl ml-1"/>
                </button>
            </div>

            <div class="mt-10">
                <div v-for="i in 4"
                class="flex justify-between p-3 mb-2 bg-[#000F24] rounded">
                    <div class="flex justify-center items-center ">
                        <div class="mr-2">
                            <IconsBtcColored class="h-8 w-8"/>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-lg">USBT</span>
                            <span class="text-xs text-gray-400">USDT(0.00)</span>
                         </div>
                    </div>

                    <div class="flex flex-col justify-center items-center">
                        <div class="text-sm">0.0870</div>
                        <div class="bg-[#192c27] text-green-500  p-1 rounded inline-flex justify-center items-center text-[8px]">
                            +26.99%
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    </div>
 </template>



 
 
 <script setup>


 const visible =ref(false)

 const toggleVisible =()=>{
    visible.value =!visible.value
 }
 
// const fundTypes = ["deposit","withdraw","transfer"]
 
const fundTypes = [
    {title:"deposit",link:"#"},
    {title:"withdraw",link:"/withdrawFund"},
    {title:"transfer", link:"/fundTransfer"},
]
 
 </script>