
<template>
    <div class="fixed h-screen w-full px-4 pt-4">
        <form class="text-black">
            <div class="flex justify-between my-4 w-full">
                <IconsArrowBack />
                <label for="countries" class="block mb-2 text-sm font-medium text-white">Select an option</label>
                <span class="h-4 w-4"></span>
            </div>
            <select id="countries" class="bg-[#0d1b2f] text-white text-sm rounded-md border-none focus:ring-transparent  block w-full p-4 ">
              <option selected>Choose a country</option>
              <option  value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
        </form>

        <div class="w-full mt-6">
            <nuxt-Link to="/sign-up/selectNumber" type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
             hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
             rounded-md  p-3 text-center">Proceed</nuxt-Link>

       </div> 
    </div>
</template>



<script setup>

definePageMeta({
    layout: 'custom',
})

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})


</script>
