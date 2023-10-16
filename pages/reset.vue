<template>
    <div class="fixed h-screen p-4 w-full">
        <nuxt-link to="#" class="h-4 w-4 text-white relative z-30">
           <IconsArrowBack class="text-xl"/>
       </nuxt-link>
    
       <div class="my-5 flex flex-col">
           <span class="font-bold text-xl drop-shadow-lg drop-shadow-green-300">Reset Password</span>
       </div> 
    
       <form class="w-full flex flex-col ">
            <div class="mb-6">
                <label for="Email" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <input type="Email" id="Email" class="block w-full p-4  text-sm text-white border-none focus:ring-transparent  rounded-md
                    bg-[#0d1b2f]" placeholder="Email" required>
                   
                </div>
            </div> 
           
            
            <div class="mb-6" >
                <label for="password" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                <div
                class="relative">
                    <input  :type="`${shownewPassword?'password':'text'}`" id="Password" class="block w-full p-4  text-sm text-white rounded-md border-none focus:ring-transparent 
                    bg-[#0d1b2f]" placeholder="New Password" required v-model="newPassword">
                    <button  v-if="shownewPassword"  class="absolute right-2.5 -translate-y-[35px]" @click="togglenewPassword">
                        <IconsInvisible class="text-black    text-xl"/>
                    </button>
                    <button v-else class="absolute right-2.5 -translate-y-[35px]" @click="togglenewPassword">
                        <IconsVisible class="text-black   text-xl"/>
                    </button>
                </div>
              
            </div>
            <div class="mb-6" >
                <label for="password" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
                <div
                class="relative">
                    <input :type="`${showconfirmPassword?'password':'text'}`" id="Password" class="block w-full p-4  text-sm text-white rounded-md border-none focus:ring-transparent 
                    bg-[#0d1b2f]" placeholder="Confirm Password" required v-model="confirmPassword">
                    <button  v-if="showconfirmPassword"  class="absolute right-2.5 -translate-y-[35px]" @click="toggleconfirmPassword">
                        <IconsInvisible class="text-black    text-xl"/>
                    </button>
                    <button v-else class="absolute right-2.5 -translate-y-[35px]" @click="toggleconfirmPassword">
                        <IconsVisible class="text-black   text-xl"/>
                    </button>
                </div>
              
            </div> 
            
    
    
           <nuxt-Link to="verify" class="w-full my-4">
                <button type="button" class="text-white w-full bg-gradient-to-r from-[#25FEB7] via-green-400 to-[#1DC7AC]
                 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 font-medium 
                 rounded-md  p-3 text-center">Submit</button>
    
           </nuxt-Link>  
       </form>
     
    </div>
</template>



<script setup>
definePageMeta({
    layout: 'custom',
})

const confirmPassword =ref(null)
const newPassword =ref(null)
const showconfirmPassword = ref(true)
const shownewPassword = ref(true)
const toggleconfirmPassword = ()=>{
    showconfirmPassword.value = !showconfirmPassword.value
}
const togglenewPassword = ()=>{
    shownewPassword.value = !shownewPassword.value
}
</script>