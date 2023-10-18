<template>
    <div class="w-full min-h-full  pb-10">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-4 items-center">
            <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>

            <div class="col-span-3 capitalize text-sm">
                BTC Address
            </div>
        </div>
       

        <div class="px-4 pt-6 h-full">
            <div class="bg-[#0d1b2f] flex flex-col items-center text-center py-3 px-8 rounded-md">
                <iconsBtcColored class="text-2xl"/>
                <div class="my-2 grid grid-cols-5 gap-2">
                    <div  v-for="i in 5">
                        <span class="bg-gray-700 p-1 text-[9px] rounded-sm">TRC20</span>
                    </div>
                </div> 

                <span class="text-xs text-gray-400 mt-3">Scan the QR code to recieve Bitcoin</span>

                <img class="my-2" src="/QRcode.png"/>

                <div class="flex justify-center items-center w-full mt-10 relative">
                    <hr class=" w-full  border-gray-600">
                    <span class="bg-gray-400 text-black font-bold rounded-full absolute inline-flex justify-center items-center h-6 w-10 pb-0.5">or</span>
                    <hr class="w-full border-gray-600">
                </div>

                <span class="mt-8 text-gray-400 text-sm">Your TRC20 BTC Address</span>
                <input type="text" id="referral code" class="block w-full  p-3  my-4 text-center text-sm text-gray-400 rounded-md border border-gray-600 focus:ring-transparent 
                    bg-[#000F24]" value="jdlbhbfchbeu9834y833u29u3hjbdjn" disabled>
                
                <span class="text-xs text-gray-400">Send only BTC TRC20 to the deposit address.Sending another coin to this address may result to loss of coin.</span>

                <button class="px-3 py-2 ring-1 ring-purple-500 text-[10px]  capitalize my-4 text-center text-purple-500  rounded-md">copy address</button>
            </div>

        </div>

    </div>
 </template>
 

 
 
 
 <script setup>
 definePageMeta({
     layout: 'custom',
 })
 </script>