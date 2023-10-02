
<template>
    <div class="fixed h-screen p-4 w-full">
         <nuxt-link to="#" class="h-4 w-4 text-white relative z-30">
            <IconsArrowBack class="text-xl"/>
        </nuxt-link>

        <div class="my-6 flex flex-col">
            <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Sign Up</span>
            <span class="text-gray-400 text-xs">Get started on crypto by signing-up</span>
        </div> 

        <form class="w-full flex flex-col "> 
            <div class="my-4 flex flex-col w-full">
              
                <div class="mb-6">
                    <label for="text" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                    <div class="relative">
                        <input type="text" id="Name" class="block w-full p-4  text-sm text-white border-none  rounded-md focus:ring-transparent
                        bg-[#0d1b2f]" placeholder="Name" required>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="Email" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                    <div class="relative">
                        <input type="Email" id="Email" class="block w-full p-4  text-sm text-white border-none   rounded-md focus:ring-transparent
                        bg-[#0d1b2f]" placeholder="Email" required>
                    </div>
                </div>

                <div class="mb-6" >
                    <label for="password" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                    <div
                    class="relative">
                      
                        <input  :type="`${showPassword?'password':'text'}`" id="password" class="block w-full p-4  text-sm text-white rounded-md border-none    focus:ring-transparent
                        bg-[#0d1b2f]" placeholder=" Password" required v-model="Password">
                        <button  v-if="showPassword"  class="absolute right-2.5 -translate-y-[35px]" @click="togglePassword">
                            <IconsInvisible class="text-black    text-xl"/>
                        </button>
                        <button v-else class="absolute right-2.5 -translate-y-[35px]" @click="togglePassword">
                            <IconsVisible class="text-black   text-xl"/>
                        </button>
                    </div>
                  
                </div>
            </div>

            <nuxt-Link to="sign-up/selectCountry" class="w-full ">
                 <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                  hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                  rounded-md  p-3 text-center">Next</button>

            </nuxt-Link>  
        </form>
      
    </div>
</template>


<script setup>
definePageMeta({
    layout: 'custom',
})


const Password =ref(null)
const showPassword = ref(true)
const togglePassword = ()=>{
    showPassword.value = !showPassword.value
}
</script>