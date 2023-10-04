<template>
    <div class="py-6 relative px-4">
        <div v-for="(i,index) in 4" :key="index" class="rounded-lg relative overflow-hidden">
            <div v-if="index===count">
                <img class="transition" src="/home-img/carousel-img.png" alt="">
            </div>
        </div>
        <div  class="flex justify-center items-center">
            <div v-for="(i,index) in 4" :key="index" class="flex mr-1 mt-2">
                <div class="h-3 w-3 bg-slate-50 rounded-full" :class="index===count?'bg-green-500':''"></div>
            </div>
        </div>
    </div>
</template>