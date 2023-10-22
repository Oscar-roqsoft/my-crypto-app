<template>
    <div class="h-full overflow-y-scroll pb-16">
             
        <!-- <navMenu/> -->

        <div class="bg-[#0d1b2f] py-4 flex justify-center items-center">
            <h1>Profile</h1>
        </div>

       <div class="grid grid-cols-3 m-4 p-4  items-center bg-[#0d1b2f] rounded-md ">
          <div class=" flex justify-center items-center">
              <div class="h-16 w-16 p-0.5 rounded-full  bg-white flex justify-center items-center">
                 <img src="/04.jpg" alt="" class="w-full rounded-full">
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
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100  to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Edith Profile</span>
                </div>
                <div @click="navigateTo('/dashboard/profile/edithProfile')">
                    <iconsArrowleft/>
                </div>
            </div>
            <div class="flex justify-between items-center my-2">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Next of Kin</span>
                </div>
                <div @click="navigateTo('/dashboard/profile/editNextOfKin')" >
                    <iconsArrowleft/>
                </div>
            </div>
            <div class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Link to bank</span>
                </div>
                <div @click="navigateTo('/dashboard/profile/linkBank')">
                    <iconsArrowleft/>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                    <span>Referral link</span>
                </div>
                <div @click="navigateTo('/dashboard/profile/editReferral')">
                    <iconsArrowleft/>
                </div>
            </div>
       </div>

       <div class="m-4 mt-6">
           <h3 class="text-sm">Security</h3>
           <div class="mt-2 p-4 bg-[#0d1b2f] rounded-md">
                <div class="flex justify-between items-center ">
                    <div class="flex items-center ">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Change password</span>
                    </div>
                    <div @click="navigateTo('/dashboard/profile/editPassword')">
                        <iconsArrowleft/>
                    </div>
                </div>
                <div class="flex justify-between items-center my-2">
                    <div class="flex items-center">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Change pin</span>
                    </div>
                    <div @click="navigateTo('/dashboard/profile/EditPin')" >
                        <iconsArrowleft/>
                    </div>
                </div>
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Enable fingerprint</span>
                    </div>
                    <!-- <nuxt-Link to="#">
                    </nuxt-Link> -->
                    <Radio :toggleValue="showFingerprint" @toggleChanged="toggleShowFingerprint"/>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                        <span>Verify identity</span>
                    </div>
                    <div @click="navigateTo('/dashboard/profile/identityVerify')">
                        <iconsArrowleft/>
                    </div>
                </div>
            </div>
       </div>

       <div class="m-4 mt-6">
        <h3>Support</h3>
        <div class="mt-2 p-4 bg-[#0d1b2f] rounded-md ">
             <div class="flex justify-between items-center">
                 <div class="flex items-center">
                     <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                     <span>Feedback</span>
                 </div>
                 <div to="#">
                     <iconsArrowleft/>
                 </div>
             </div>
             <div class="flex justify-between items-center my-2">
                 <div class="flex items-center">
                     <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                     <span>On notification</span>
                 </div>
                 <!-- <div to="#">
                </div> -->
                <Radio :toggleValue="showNotification" @toggleChanged="toggleShowNotification"/>
             </div>
             <div class="flex justify-between items-center mb-2">
                 <div class="flex items-center">
                     <div class="h-6 w-6 bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0]   rounded-full mr-2"></div>
                     <span>Help & support</span>
                 </div>
                 <div  @click="navigateTo('#')">
                     <iconsArrowleft/>
                 </div>
             </div>
             <div class="flex justify-between items-center">
                 <div class="flex items-center">
                     <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] rounded-full mr-2"></div>
                     <span>About</span>
                 </div>
                 <div @click="navigateTo('#')">
                     <iconsArrowleft/>
                 </div>
             </div>
         </div>
       </div>
     
        <div class="m-4 p-4 bg-[#0d1b2f] rounded-md ">
            <div class="flex justify-between items-center text-xs">
                <div class="flex items-center">
                    <div class="h-6 w-6  bg-gradient-to-r from-[#ecf4f2]  via-yellow-100 to-[#edf0f0] text-xl rounded-full   mr-2 inline-flex justify-center items-center">
                    </div>
                    <span>Log out</span>
                </div>
                <div @click="navigateTo('/sign-in')" class="text-xl">
                    <iconsLogout/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


let showFingerprint = ref(false);
let showNotification = ref(true);


const toggleShowFingerprint =(v)=>{
    showFingerprint.value= v;
}

const toggleShowNotification =(v)=>{
    showNotification.value= v;
    console.log(showNotification.value);
}

</script>