<template>

    <div class="fixed w-full h-screen">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-10 items-center">
            <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>

            <div class="col-span-8 capitalize text-sm flex justify-center items-center">
                set rates
            </div>

            <div>
                <IconsDelete class="text-xl"/>
            </div>
        </div>

        <form class="w-full flex flex-col px-4 mt-10"> 
            
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative mb-4">
                <input type="search" id="search" class="block w-full p-4  pl-40  text-sm text-white rounded-md border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="Enter Rate" required>
                <div type="submit" class=" absolute left-2.5 bottom-2   bg-[#19283c] text-gray-400 capitalize
                 hover:bg-gradient-to-l focus:ring-1focus:outline-none focus:ring-blue-300 font-medium rounded text-xs px-4 py-2.5 ">debit deposit rate</div>
            </div>

            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative mb-4">
                <input type="search" id="search" class="block w-full p-4 pl-40  text-sm text-white rounded border-none focus:ring-transparent 
                bg-[#0d1b2f]" placeholder="Enter Rate" required>
                <div type="submit" class="absolute left-2.5 bottom-2   bg-[#19283c] text-gray-400 capitalize
                 hover:bg-gradient-to-l focus:ring-1focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-4 py-2.5 ">debit deposit rate</div>
            </div>


            <!-- warning -->
            <div class="mt-12 px-4">
                <div class="bg-transparent p-3 ring-[0.5px] rounded ring-green-300">
                    <div class="grid grid-cols-10">
                        <div class="bg-green-600 rounded-full h-5 w-5 inline-flex justify-center items-center">
                            <IconsPlus colorchange="white" class="text-xl"/>
                        </div>
                        <span class="col-span-9 text-sm text-gray-400">
                            <span class="text-green-400"> ATTENTION ! </span>
                            Please note we advice you use  enter your correct bank details for easy confirmation and fast payment
                        </span>
                    </div>
                </div>
            </div>

            <!-- end of warning -->
    

            <nuxt-Link to="#" class="w-full my-6">
                <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-3 text-center">Confirm</button>
           </nuxt-Link>   
       </form>

    </div>

</template>





<script setup>
definePageMeta({
    layout: 'custom',
})
</script>