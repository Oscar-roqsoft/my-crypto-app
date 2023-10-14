<template>
    <div class="h-full overflow-y-scroll">
        <KeepAlive>
            <home v-if="useCurrentNavMenu.currentNavMenu==='home'"/>
            <trading v-else-if="useCurrentNavMenu.currentNavMenu==='trading'"/>
            <wallet v-else-if="useCurrentNavMenu.currentNavMenu==='wallet'"/>
            <profile v-else/>
        </KeepAlive>

        <div class="px-3 bg-transparent z-40 text-gray-400 fixed bottom-0 left-0 w-full">
            <div
                class="flex justify-between items-center text-xs w-full shadow-xl py-2 shadow-[#262c33] ">
                <div v-for="item in navItems" >
    
                    <button  @click="toggleCurrentNavMenu(item.title)"  :class="useCurrentNavMenu.currentNavMenu===item.title?' bg-[#16202e] shadow-md ':''"
                    class="flex flex-col justify-center items-center px-5 py-1  w-full rounded-lg transition ease-in-out delay-75">
                        <svg :class="useCurrentNavMenu.currentNavMenu===item.title?' text-lg animate-bounce ':'text-lg'" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path
                            fill="#f4f4f4" :d="item.iconName"></path></svg>
                        {{ item.title }}
                    </button>
                </div>
               
            </div>
            </div>
            <div class="p-7 glass-bg z-30  text-gray-400 fixed bottom-0 left-0 w-full">
    
        </div>
    </div>

</template>


<script setup>

import home from "@/pages/dashboard/home/index.vue";
import trading from "@/pages/dashboard/trading/index.vue";
import wallet from "@/pages/dashboard/wallet/index.vue";
import profile from "@/pages/dashboard/profile/index.vue";

import { useStore } from "@/stores/app.js"

const useCurrentNavMenu = useStore()

defineComponent({
    home,
    trading,
    wallet,
    profile,
})

    
    
definePageMeta({
     layout: 'custom',
 })

//   const currentNavMenu = ref("home")
   
  


   const navItems = [
        {
            id:1,
            title:"home",
            iconName:"M4 21v-9.375L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21H4Zm4-6q-.425 0-.713-.288T7 14q0-.425.288-.713T8 13q.425 0 .713.288T9 14q0 .425-.288.713T8 15Zm4 0q-.425 0-.713-.288T11 14q0-.425.288-.713T12 13q.425 0 .713.288T13 14q0 .425-.288.713T12 15Zm4 0q-.425 0-.713-.288T15 14q0-.425.288-.713T16 13q.425 0 .713.288T17 14q0 .425-.288.713T16 15Z"

        },
        {
            id:2,
            title:"trading",
            iconName:"M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm9.65-3L19 11.65l-1.4-1.425l-3.95 3.95l-3.65-3.65l-5 5l1.4 1.425l3.6-3.6L13.65 17Zm.1-5.5l.7-1.55l1.55-.7l-1.55-.7l-.7-1.55l-.7 1.55l-1.55.7l1.55.7l.7 1.55Z"
        },
        {
            id:3,
            title:"wallet",
            iconName:"M2 20V4h20v16H2ZM4 8h16V6H4v2Zm11.775 6.075L20 10.525V10H4v1.225l11.775 2.85Z"
        },
        {
            id:4,
            title:"profile",
            iconName:"M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038t.525-.887q-.1-.25-.15-.525T7.5 8q0-.95.513-1.688T9.35 5.226q.5-.575 1.175-.9T12 4q.8 0 1.475.325t1.175.9q.825.35 1.338 1.088T16.5 8q0 .275-.05.55t-.15.525q.35.4.525.888T17 11q0 1.25-.875 2.125T14 14h-4Zm-4 8q-.825 0-1.413-.588T4 20v-.8q0-.85.438-1.563T5.6 16.55q1.55-.775 3.15-1.163T12 15q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 19.2v.8q0 .825-.588 1.413T18 22H6Z"
        }
    ]

    const toggleCurrentNavMenu =(v)=>{
        useCurrentNavMenu.currentNavMenu = v
    }

    
</script>


<style scoped>
.glass-bg{
    background: rgba(92,92,69,0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(92,92,69,0.25);
}
</style>
   