<template>
    <div  id="default-carousel" class="py-6 relative  w-full px-4" data-carousel="slide">
        <div class="rounded-lg relative overflow-hidden h-40 ">
            <div v-for="(image,index) in carouselImgs" :key="index" class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="object-cover">
                    <img class="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :src="image" alt="">
                </div>
            </div>
        </div>
        <div  class="flex justify-center items-center">
            <div class="flex  mt-2">
                <!-- <div class="h-3 w-3 bg-slate-50 rounded-full"></div> -->
                  <button type="button"  class="w-3 h-3 mr-1 rounded-full"  aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                  <button type="button" class="w-3 h-3 mr-1 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                  <button type="button" class="w-3 h-3 mr-1 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                  <button type="button" class="w-3 h-3 mr-1 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
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


const carouselImgs = ["/home-img/nft3.jpg","/home-img/carousel-img.png","/home-img/nft2.jpg","/home-img/carousel-img.png"]
</script>

<style scoped>
    [aria-current="true"]{
        background-color: #1DC7AC!important;
    }
    [aria-current="false"]{
        background-color: #d5e4e1!important;
    }
</style>