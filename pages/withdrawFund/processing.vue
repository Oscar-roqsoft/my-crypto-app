<template>

    <div class="fixed w-full h-full">
         <div class="bg-[#0d1b2f] px-8 py-8   w-full">
            <span class="text-sm text-green-500 leading-relaxed">Direct pay</span> 
            <div class="grid grid-cols-5 items-center " v-if="successful">
                <span class="text-2xl capitalize font-bold col-span-4">Order processing...</span>
                <span class="inline-flex justify-center items-center">
                    <iconsWarning2 class="text-4xl  rounded-full"/>
                </span>
            </div>
            <div class="grid grid-cols-5 items-center transition" v-else>
                <span class="text-2xl capitalize font-bold col-span-4  ">successful paid</span>
                <span class="inline-flex justify-center items-center">
                    <iconsSuccess class="text-4xl bg-white rounded-full"/>
                </span>
            </div>
         </div>
 

 
 
         <div class="px-4 my-6">
             <div class="bg-[#0d1b2f] p-4 capitalize rounded-sm">
                  <div class="flex justify-between items-center mb-2">
                       <span class="text-gray-400 text-xs">crypto:</span>
                       <span class="text-sm">USDT</span>
                  </div>
                  <div class="flex justify-between items-center mb-2">
                       <span class="text-gray-400 text-xs">coin quantity:</span>
                       <span class="text-sm">100</span>
                  </div>
                  <div class="flex justify-between items-center mb-2">
                       <span class="text-gray-400 text-xs">rate:</span>
                       <span class="text-sm">622</span>
                  </div>
                  <div class="flex justify-between items-center mb-2">
                       <span class="text-gray-400 text-xs">naira conversion:</span>
                       <span class="text-sm">62000</span>
                  </div>
                  <div class="flex justify-between items-center">
                       <span class="text-gray-400 text-xs">processing fee:</span>
                       <span class="text-sm">2%</span>
                  </div>
             </div>
         </div>
 
 
 
         <div class="mt-12 px-4">
             <div class="bg-transparent p-3 ring-[0.5px] rounded ring-green-300">
                 <div class="grid grid-cols-10">
                     <div class="bg-green-600 rounded-full h-5 w-5 inline-flex justify-center items-center">
                         <IconsWarning  class="text-lg"/>
                     </div>
                     <span class="col-span-9 text-sm text-gray-500">
                         <span class="text-green-400"> ATTENTION ! </span>
                         Please note we advice you to use  payyie directpay for easy  and fast processing
                     </span>
                 </div>
             </div>
         </div>
 
         <div class="px-4 mt-14 grid grid-cols-2 gap-6 " >
             <button type="button" class="text-white w-full bg-transparent ring-1 ring-[#1DC7AC] capitalize
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium text-sm
                 rounded-md  p-3 text-center">
                 appeal
             </button>
             <button v-if="successful" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium text-sm capitalize
                 rounded-md  p-3 text-center">
                 confirm
             </button>
             <button v-else type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium text-sm capitalize
                 rounded-md  p-3 text-center">
                 confirm
             </button>
         </div>
 
    </div>
 
 </template>
 
 
 <script setup>
   definePageMeta({
     layout:"custom",
   })

   const successful = ref(false)
 
 
 
 </script>