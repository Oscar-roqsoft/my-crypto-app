<template>
    <div class="w-full min-h-[100%] overflow-x-scroll">
      <div class="bg-[#0d1b2f] pt-4">

          <div class="grid grid-cols-3 items-center gap-3 border-y border-gray-600 py-3 px-4" >
              <div v-for="(item,index) in accountItems" :key="index" class="inline-flex justify-center  items-center transition-all 
               px-1 py-2  rounded"
              :class="currentAccMenu.currentAccMenu===item.value?'bg-green-400 text-white':'bg-transparent text-gray-400'"   @click="toggleCurrentNavAcc(item.value)" >
                 <button class="capitalize text-[11px]">{{ item.value }} account</button>
              </div>
          </div>
           
      </div>

      <KeepAlive>
          <WalletCompSpotAcc v-if="currentAccMenu.currentAccMenu==='spot'"/>
          <WalletCompFutureAcc v-else-if="currentAccMenu.currentAccMenu==='future'"/>
          <WalletCompMerchantAcc v-else/>
      </KeepAlive>

    
    </div>
 </template>



 
 
 <script setup>


 import { useStore } from "@/stores/app.js"

const currentAccMenu = useStore()



 

const accountItems = [
    {id:1, title:"spotAcc",value:"spot"},{id:2,title:"futureAcc",value:"future"},{id:3,title:"merchantAcc",value:"merchant"}
]

 
 const toggleCurrentNavAcc =(v)=>{
    currentAccMenu.currentAccMenu = v
        console.log(currentAccMenu.currentAccMenu)
    }
 

 
 </script>