<template>
    <div class="h-full overflow-y-scroll pb-16">
             
        <navMenu/>

        <div class="bg-[#0d1b2f] py-4 flex justify-center items-center">
            <h1>Profile</h1>
        </div>

       <div class="grid grid-cols-3 m-4 p-4  items-center bg-[#0d1b2f] rounded-md ">
          <div class=" flex justify-center items-center">
              <div class="h-16 w-16 rounded-full bg-white">
                 <img src="" alt="" width="100%">
              </div>
          </div>
          <div class="flex flex-col col-span-2">
            <span class="text-lg">Oscar Nnoje</span>
            <span class="text-sm">Payyie tag:<span>@oscartech</span></span>
          </div>
       </div>
        
       <div class="m-4 p-4 bg-[#0d1b2f] rounded-md ">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Edith Profile</span>
                </div>
                <nuxt-Link to="#">
                    <iconsArrowleft/>
                </nuxt-Link>
            </div>
            <div class="flex justify-between items-center my-2">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Next of Kin</span>
                </div>
                <nuxt-Link to="#">
                    <iconsArrowleft/>
                </nuxt-Link>
            </div>
            <div class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Link to bank</span>
                </div>
                <nuxt-Link to="#">
                    <iconsArrowleft/>
                </nuxt-Link>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Referral link</span>
                </div>
                <nuxt-Link to="#">
                    <iconsArrowleft/>
                </nuxt-Link>
            </div>
       </div>

       <div class="m-4 mt-6">
           <h3>Security</h3>
           <div class="mt-2 p-4 bg-[#0d1b2f] rounded-md ">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Change password</span>
                    </div>
                    <nuxt-Link to="#">
                        <iconsArrowleft/>
                    </nuxt-Link>
                </div>
                <div class="flex justify-between items-center my-2">
                    <div class="flex items-center">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Change pin</span>
                    </div>
                    <nuxt-Link to="#">
                        <iconsArrowleft/>
                    </nuxt-Link>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Enable fingerprint</span>
                    </div>
                    <nuxt-Link to="#">
                        <button class="h-4 w-8 bg-gray-200 rounded-lg flex items-center" @click="toggleshowDot">
                            <span  v-if="!showDot"  class="flex justify-start items-start w-full ">
                                <div  class="h-[18px] w-[18px] bg-[#05f8d0] rounded-full transition shadow-md ease-linear"></div>
                            </span>
                            <span  v-if="showDot" class="flex justify-end items-end w-full">
                                <div  class="h-[18px] w-[18px] bg-[#05f8d0] rounded-full transition shadow-md ease-linear"></div>
                            </span>
                        </button>
                    </nuxt-Link>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Verify identity</span>
                    </div>
                    <nuxt-Link to="#">
                        <iconsArrowleft/>
                    </nuxt-Link>
                </div>
            </div>
       </div>

       <div class="m-4 mt-6">
        <h3>Support</h3>
        <div class="mt-2 p-4 bg-[#0d1b2f] rounded-md ">
             <div class="flex justify-between items-center">
                 <div class="flex items-center">
                     <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                     <span>Feedback</span>
                 </div>
                 <nuxt-Link to="#">
                     <iconsArrowleft/>
                 </nuxt-Link>
             </div>
             <div class="flex justify-between items-center my-2">
                 <div class="flex items-center">
                     <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                     <span>On notification</span>
                 </div>
                 <nuxt-Link to="#">
                     <button class="h-4 w-8 bg-gray-200 rounded-lg flex items-center" @click="toggleshowFingerprint">
                         <span  v-if="!showFingerprint"  class="flex justify-start items-start w-full ">
                             <div  class="h-[18px] w-[18px] bg-[#05f8d0] rounded-full transition shadow-md ease-linear"></div>
                         </span>
                         <span  v-if="showFingerprint" class="flex justify-end items-end w-full">
                             <div  class="h-[18px] w-[18px] bg-[#05f8d0] rounded-full transition shadow-md ease-linear"></div>
                         </span>
                     </button>
                 </nuxt-Link>
             </div>
             <div class="flex justify-between items-center mb-2">
                 <div class="flex items-center">
                     <div class="h-6 w-6 bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0]   rounded-full mr-2"></div>
                     <span>Help & support</span>
                 </div>
                 <nuxt-Link to="#">
                     <iconsArrowleft/>
                 </nuxt-Link>
             </div>
             <div class="flex justify-between items-center">
                 <div class="flex items-center">
                     <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] rounded-full mr-2"></div>
                     <span>About</span>
                 </div>
                 <nuxt-Link to="#">
                     <iconsArrowleft/>
                 </nuxt-Link>
             </div>
         </div>
       </div>
     
        <div class="m-4 p-4 bg-[#0d1b2f] rounded-md ">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-[#05f8d0]  to-[#edf0f0] text-xl rounded-full   mr-2 inline-flex justify-center items-center">
                    </div>
                    <span>Log out</span>
                </div>
                <nuxt-Link to="#" class="text-xl">
                    <iconsLogout/>
                </nuxt-Link>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
})

let showFingerprint =ref(false)
const toggleshowFingerprint =()=>{
     showFingerprint.value= !showFingerprint.value
}
</script>