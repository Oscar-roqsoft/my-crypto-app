<template>

    <div v-for="(list,index) in onboarditems" :key="index"
       class="h-screen w-full flex flex-col justify-center items-center z-10">
        
        <div v-if="index === count">
            <div class="fixed top-14 left-0 flex justify-center items-center  h-[70%]">
                <img class="absolute top-[-50px] left-1" :src="list.img" alt="">
                <img class="relative left-[221px] bottom-[164px] " :src="list.img1" alt="">
                <img class="relative bottom-[20px] left-[8px]" :src="list.img2" alt="">
                <img class="absolute -top-[4px] right-[95px]" :src="list.img3" alt="">
                <img class="relative bottom-[94px] -left-[44px]" :src="list.img4" alt="">
                <img class="relative top-[13px] right-[192px]" :src="list.img5" alt="">
            </div>

            <div class="fixed w-full left-0 bottom-10 flex flex-col justify-center items-center">
                <div class="bg-[#ffff] w-[80%] flex flex-col justify-center rounded-3xl p-5 shadow-xl">
                    <div class="text-gray-900 mb-4">
                    
                        <article  class="my-2 relative">
                            <div class="flex justify-between w-full relative bottom-3">
                                <div class="flex justify-center items-center">
                                
                                    <button type="button"  class="w-3 h-3 rounded-full transition ease-linear" :class="index===0?'bg-green-400':'bg-gray-400'" ></button>
                                    <button type="button"  class="w-3 h-3 rounded-full mx-2 transition ease-linear" :class="index===1?'bg-green-400':'bg-gray-400'" ></button>
                                    <button type="button"  class="w-3 h-3 rounded-full transition ease-linear " :class="index===2?'bg-green-400':'bg-gray-400'" ></button>
                                </div>
        
                                <div class="text-sm font-bold">
                                    <span>{{ list.id }}</span>
                                    <span>/3</span>
                                </div>
                            </div>


                            <div   class=" relative h-24 text-gray-900 mb-2  w-full">
                            <div class=" duration-700 ease-in-out">
                                    <div  class="block w-full">
                                        <h2 class="text-xl  font-bold"><span class="text-[#1DC7AC]">Crytocurrency</span> is the future</h2>
                                        <p class="text-lg  mt-2 font-medium">{{ list.carouselItem }}</p>
                                    </div>
                                    
                                </div>
                            
                            </div>

                        </article>

                    </div>

                    
                        <button v-show="count < 2" @click="currentslide()"
                        type="button" class="text-white bg-gradient-to-r from-[#323968]  to-[#1a9984] z-30
                        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded-3xl 
                        text-sm px-4 py-4 mx-6 text-center ">{{ list.btn1 }}</button>

                        <div v-show="count===2" class="flex justify-center mt-2">
                            <nuxt-Link to="sign-in" type="button" class="text-white bg-gradient-to-r from-[#32685c]  to-[#1a9984]
                            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded-3xl 
                            text-sm px-6 py-3 text-center mr-2 ">{{ list.btn2 }}</nuxt-Link>
                            <button type="button" class="text-white  bg-[#323968] 
                            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded-3xl 
                            text-sm px-6 py-3 text-center ">{{ list.btn3 }}</button>
                        </div>
                
                </div>
            
            </div>

        </div>

    </div>

</template>


<script setup>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const currentCarouselItem = ref(1)

const count = ref(0)


const currentslide = ()=>{
   count.value++
 }

const onboarditems = [
    {
        id:1,
        img:"/onboarding-img/7coin.png" ,
        img1:"/onboarding-img/buycoin.png",
        img2:"/onboarding-img/boardcoin.png",
        img3:"/onboarding-img/smallcoin.png",
        img4:"/onboarding-img/bigcoin.png",
        img5:"/onboarding-img/weighcoin.png",
        btn1: "Continue",
        carouselItem: "Crytocurrency is the most very secure in the world1",
       
    },

    {
        id:2,
        img:"/onboarding-img/7coin.png" ,
        img1:"/onboarding-img/buycoin.png",
        img2:"/onboarding-img/boardcoin.png",
        img3:"/onboarding-img/smallcoin.png",
        img4:"/onboarding-img/bigcoin.png",
        img5:"/onboarding-img/weighcoin.png",
        btn1: "Continue",
        carouselItem: "Crytocurrency is the most very secure in the world2",
       
    },

    {
        id:3,
        img:"/onboarding-img/7coin.png" ,
        img1:"/onboarding-img/buycoin.png",
        img2:"/onboarding-img/boardcoin.png",
        img3:"/onboarding-img/smallcoin.png",
        img4:"/onboarding-img/bigcoin.png",
        img5:"/onboarding-img/weighcoin.png",
        btn2:"Sign In",
        btn3:"Sign Up",
        carouselItem: "Time to explore the crypto lets get started",
       
    }
] 


</script>