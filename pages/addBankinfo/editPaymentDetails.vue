<template>
 
    <div class="fixed w-full">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-10 items-center">
            
             <IconsArrowBack @click="navigateTo('/addBankinfo/paymentDetails')" class="text-xl"/>

            <div class="col-span-8 capitalize text-sm flex justify-center items-center">
                Edit bank details
            </div>

            <div>
                <IconsDelete class="text-xl"/>
            </div>
        </div>



        <form class="px-4 mt-10">
            
            <div class="mb-4">
                <label for="Bank Name" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="Bank Name" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Bank Name" v-model.trim="useValue.BankName" required>
                   
                </div>
            </div> 

            <div class="mb-4">
                <label for="Account Number" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="number" id="Account Number" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Account Number" v-model.trim="useValue.accountNumber"  required>
                   
                </div>
            </div> 

            <div class="mb-10">
                <label for="Account Name" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="Account Name" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Account Name" v-model.trim="useValue.accountName" required>
                   
                </div>
            </div> 
            

            <nuxt-Link to="/addBankinfo/paymentDetails" class="w-full my-4">
                <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium  text-sm
                 rounded-md  p-3 text-center">Confirm</button>
           </nuxt-Link>  
        </form>
    </div>


</template>





<script setup>
definePageMeta({
    layout: 'custom',
})

import { useStore } from  "@/stores/app"

const useValue = useStore()



</script>