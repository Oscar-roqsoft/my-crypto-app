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
                <iconsUsdtColored class="text-3xl"/>
                <div class="flex flex-col ml-2">
                    <span class="text-sm">Tether</span>
                    <span class="text-[10px] text-gray-400">USDT</span>
                </div>
             </div>

            <div class="flex flex-col">
                 <span class="text-[10px] text-[#1DC7AC]">available balance</span>
                 <span class="text-xs">0.00 USDT</span>
            </div>
        </div>
        
        <div class="bg-[#0d1b2f] px-4 py-4 min-h-[80vh]" >
            <div class=" grid grid-cols-11 pt-10 pb-6 h-48 mb-8">

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
                       <select id="countries" class="bg-[#0d1b2f] text-white text-xs rounded-md border-none focus:ring-transparent capitalize block w-full">
                           <option selected>main account</option>
                           <option  value="US">main account</option>
                           <option value="CA">future</option>
                           <option value="FR">merchant account</option>
                       </select>
                   </div>
                   <div class="flex items-center w-full">
    
                       <span class="text-[8px] text-gray-200 ">from</span>
                       <select id="countries" class="bg-[#0d1b2f] text-white text-xs rounded-md border-none focus:ring-transparent capitalize  block w-full">
                           <option selected>main account</option>
                           <option  value="US">main account</option>
                           <option value="CA">future</option>
                           <option value="FR">merchant account</option>
                       </select>
                   </div>
                  
                </dv>

                <dv class="flex items-center ">
                    <div class="h-8 w-8 rounded-full bg-gray-800 inline-flex justify-center items-center">
                         <IconsArrowDown class="text-2xl"/>
                         <IconsArrowUp class="text-2xl"/>
                    </div>
                </dv>

               
            </div>
           
            <span class="text-sm text-gray-400  mx-4 mt-4">Amount</span>
            <div class="relative mx-1 mb-4 mt-1">
                <input type="number" id="search" class="block w-full p-4   text-sm text-white rounded border-none focus:ring-transparent 
                bg-[#000F24]">
                <div type="submit" class="absolute right-2.5 bottom-2.5   bg-transparent ring-[0.5px] ring-green-500  text-green-400 capitalize
                 hover:bg-gradient-to-l focus:ring-1focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-2 ">max</div>
            </div>

            <div class="px-4 relative">
                <button type="button" class="text-white w-full bg-gradient-to-r absolute top-14 left-0 from-[#25FEB7] via-green-400 to-[#1DC7AC]
                hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium capitalize text-sm
                rounded-md  p-3 text-center">proceed</button>
            </div>


        </div> 
   </div>
</template>





<script setup>
definePageMeta({
    layout: 'custom',
})
</script>