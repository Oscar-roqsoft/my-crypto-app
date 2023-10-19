<template>

   <div class="fixed w-full h-full">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-4 items-center">
            <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>

            <div class="col-span-2 capitalize text-sm text-center">
                withdraw fund
            </div>
        </div>


        <div class="flex mt-10  mb-6 px-4 relative">
            <select id="countries" class="bg-[#0d1b2f] border-none  text-gray-300 text-sm rounded-s-md  block  focus:ring-transparent ">
                <option selected>USDT</option>
                <option v-for="i in 4">USDT</option>
              </select>
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative w-full">
                <input type="number" id="search" class="block w-full p-4  text-sm border-none focus:ring-transparent  text-white rounded-e-md
                bg-[#0d1b2f]" placeholder="Enter quantity" required>
            </div>
            <div type="submit" class="absolute right-6 bottom-2.5   bg-transparent ring-[0.5px] ring-green-500  text-green-400 capitalize
                 hover:bg-gradient-to-l focus:ring-1focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-2 ">max</div>
        </div>


        <div class="px-4">
            <div class="bg-[#0d1b2f] p-4 capitalize rounded-sm">
                 <div class="flex justify-between items-center">
                      <span class="text-gray-400 text-xs">order:</span>
                      <span class="text-sm">32</span>
                 </div>
                 <div class="flex justify-between items-center my-2">
                      <span class="text-gray-400 text-xs">naira conversion:</span>
                      <span class="text-sm">4562</span>
                 </div>
                 <div class="flex justify-between items-center">
                      <span class="text-gray-400 text-xs">processing fee:</span>
                      <span class="text-sm">2%</span>
                 </div>
            </div>
        </div>

        <div class="mt-6 px-4 capitalize">
            <div class="bg-[#0d1b2f] p-3 ring-[0.5px] rounded ">
                <div class="grid grid-cols-8 items-center ">
                    <div class="bg-green-600 rounded-full h-8 w-8 inline-flex justify-center items-center">
                        <IconsPlus colorchange="white" class="text-2xl"/>
                    </div>
                    <span class="col-span-7 text-sm text-gray-400">select payment method</span>
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
                        Please note we advice you use  enter your correct bank details for easy confirmation and fast payment
                    </span>
                </div>
            </div>
        </div>

        <div class="px-4 mt-10">
            <button @click="navigateTo('/withdrawFund/processing')" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium text-sm
                rounded-md  p-3 text-center">
                proceed
            </button>
        </div>

   </div>

</template>


<script setup>
  definePageMeta({
    layout:"custom",
  })



</script>