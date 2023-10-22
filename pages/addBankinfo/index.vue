<template>
    <div class="fixed h-screen w-full">
        <div class="bg-[#0d1b2f] px-4 py-5 grid grid-cols-4 items-center">
            <IconsArrowBack  @click="navigateTo('/dashboard')" class="text-xl"/>

            <div class="col-span-3 capitalize text-sm">
                new payment method
            </div>
        </div>


        <form class="px-4 mt-10">
            
            <div class="mb-4">
                <label for="Bank Name" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="Bank Name" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Bank Name" v-model.trim="BankName" required>
                   
                </div>
            </div> 

            <div class="mb-4">
                <label for="Account Number" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="number" id="Account Number" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Account Number" v-model.trim="accountNumber" required>
                   
                </div>
            </div> 

            <div class="mb-10">
                <label for="Account Name" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="Account Name" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Account Name" v-model.trim="accountName" required>
                   
                </div>
            </div> 
            

            <div class="w-full my-4">
                <button type="button" @click.prevent="saveBankInfo()" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-3 text-center">Confirm</button>
           </div>  
        </form>

    </div>
</template>





<script setup>
definePageMeta({
    layout: 'custom',
})
 
import { useStore } from  "@/stores/app"

const isLoading = ref(false)

const inputValue = useStore()



const BankName = ref("")
const accountName = ref("")
const accountNumber = ref("")


watchEffect(()=>{
    inputValue.BankName = BankName.value
    inputValue.accountName = accountName.value
    inputValue.accountNumber = accountNumber.value

})



const saveBankInfo =()=>{
    let bankInfo = {
    BankName: BankName.value,
    accountNumber: accountNumber.value,
    accountName:accountName.value,

    }
     
    
    if((BankName.value)  && (accountNumber.value) && (accountName.value)){
        alert('account details saved successfully')
        return navigateTo("/addBankinfo/paymentDetails");
    }else{
        return  console.log("oga navigate joor......")
    }

    // console.log(bankInfo)
    // BankName.value = "";
    // accountName.value = "";
    // accountNumber.value = "";

    // console.log(bankInfo)

}

</script>