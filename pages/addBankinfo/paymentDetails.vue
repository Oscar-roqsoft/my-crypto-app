<template>

   <div class="fixed w-full min-h-screen">
        <div class="bg-[#0d1b2f]  px-4 py-5">
            <div class="grid grid-cols-4 mb-10 items-center">
                <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>
    
                <div class="col-span-3 capitalize text-sm">
                    new payment method
                </div>
            </div>


            
            <div class="pt-4 flex flex-col text-lg text-gray-400">
                <div class="flex justify-between items-center mb-1">
                    <span class="text-sm text-green-400">Direct payBank Transfer</span>
                    <IconsEdit @click="navigateTo('/addBankinfo/editPaymentDetails')" />
                </div>
                <span>{{ useValue.BankName }}</span>
                <span class=" text-white">{{ useValue.accountNumber }}</span>
                <span class=""> {{ useValue.accountName }} </span>
            </div>
        </div>

        <div class="mt-6 px-4">
            <h2 class="capitalize text-sm text-gray-400 mb-2">add new bank</h2>
            <div class="bg-[#0d1b2f] p-3 ring-[0.5px] rounded ">
                <div class="grid grid-cols-8 items-center ">
                    <div class="bg-green-600 rounded-full h-8 w-8 inline-flex justify-center items-center">
                        <IconsPlus colorchange="white" class="text-2xl"/>
                    </div>
                    <span class="col-span-7 text-sm text-gray-400">Add payment method</span>
                </div>
            </div>
        </div>

        <div class="mt-12 px-4">
            <div class="bg-transparent p-3 ring-[0.5px] rounded ring-green-300">
                <div class="grid grid-cols-10">
                    <div class="bg-green-600 rounded-full h-5 w-5 inline-flex justify-center items-center">
                        <IconsPlus colorchange="white" class="text-xl"/>
                    </div>
                    <span class="col-span-9 text-sm text-gray-500">
                        <span class="text-green-400"> ATTENTION ! </span>
                        Please note we advice you use  enter your correct bank details for easy confirmation and fast payment
                    </span>
                </div>
            </div>
        </div>
   </div>

</template>





<script setup>
definePageMeta({
    layout: 'custom',
})

import { useStore } from  "@/stores/app"

const useValue = useStore()

console.log(useValue.BankName)
</script>