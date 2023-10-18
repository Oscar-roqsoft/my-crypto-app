<template>
   <div class="fixed w-full">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-3 items-center">
            <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>

            <div class="col-span-2 capitalize text-sm">
                transfer
            </div>
        </div> 

        <div class="bg-[#0d1b2f] px-4 py-4 my-2 flex justify-between items-center">
             <div class="flex justify-center items-center">
                <iconsUsdtColored class="text-2xl"/>
                <div class="flex flex-col ml-2">
                    <span class="text-xs">Tether</span>
                    <span class="text-[8px] text-gray-400">USDT</span>
                </div>
             </div>

            <div class="flex flex-col">
                 <span class="text-[10px] text-[#1DC7AC]">available balance</span>
                 <span class="text-xs">0.00 USDT</span>
            </div>
        </div>
        
        <div class="bg-[#0d1b2f] px-4" >
            <div class=" grid grid-cols-11 pt-10 pb-6 h-48">

                <div class="flex flex-col text-[8px] items-center justify-between w-full py-2.5">
                    <div class="h-4 w-4 bg-green-500 rounded-full"></div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <div class="h-4 w-4 bg-gray-100 rounded-full"></div>
                </div>

                <dv class="flex flex-col justify-between col-span-9  items-start">
                   <div class="flex items-center justify-start w-full">
    
                       <span class="text-[8px] text-gray-200">from</span>
                       <select id="countries" class="bg-[#0d1b2f] text-white text-sm rounded-md border-none focus:ring-transparent  block w-full">
                           <option selected>main account</option>
                           <option  value="US">main account</option>
                           <option value="CA">future</option>
                           <option value="FR">merchant account</option>
                       </select>
                   </div>
                   <div class="flex items-center w-full">
    
                       <span class="text-[8px] text-gray-200 ">from</span>
                       <select id="countries" class="bg-[#0d1b2f] text-white text-sm rounded-md border-none focus:ring-transparent  block w-full">
                           <option selected>main account</option>
                           <option  value="US">main account</option>
                           <option value="CA">future</option>
                           <option value="FR">merchant account</option>
                       </select>
                   </div>
                  
                </dv>

                <dv class="flex items-center ">
                    <div class="h-8 w-8 rounded-full bg-slate-600 inline-flex justify-center items-center">
                         m
                    </div>
                </dv>
            </div>

        </div> 
   </div>
</template>





<script setup>
definePageMeta({
    layout: 'custom',
})
</script>