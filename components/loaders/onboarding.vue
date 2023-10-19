
<template>
    
    <div class="dots"></div>

</template>




<style>
.dots {
   width: 56px;
   height: 31.4px;
   background: radial-gradient(farthest-side at bottom,#474bff 90%,#0000) 0    calc(50% - 3.4px),
          radial-gradient(farthest-side at top   ,#474bff 90%,#0000) 0    calc(50% + 3.4px),
          radial-gradient(farthest-side at bottom,#474bff 90%,#0000) 50%  calc(50% - 3.4px),
          radial-gradient(farthest-side at top   ,#474bff 90%,#0000) 50%  calc(50% + 3.4px),
          radial-gradient(farthest-side at bottom,#474bff 90%,#0000) 100% calc(50% - 3.4px),
          radial-gradient(farthest-side at top   ,#474bff 90%,#0000) 100% calc(50% + 3.4px);
   background-size: 13.4px 6.7px;
   background-repeat: no-repeat;
   animation: dots-ddn41bmd 1s infinite linear;
}

@keyframes dots-ddn41bmd {
   16.67% {
      background-position: 0 0,0 100%,50% calc(50% - 3.4px),50% calc(50% + 3.4px),100% calc(50% - 3.4px),100% calc(50% + 3.4px);
   }

   33.33% {
      background-position: 0 0,0 100%,50% 0,50% 100%,100% calc(50% - 3.4px),100% calc(50% + 3.4px);
   }

   50% {
      background-position: 0 0,0 100%,50% 0,50% 100%,100% 0,100% 100%;
   }

   66.67% {
      background-position: 0 calc(50% - 3.4px),0 calc(50% + 3.4px),50% 0,50% 100%,100% 0,100% 100%;
   }

   83.33% {
      background-position: 0 calc(50% - 3.4px),0 calc(50% + 3.4px),50% calc(50% - 3.4px),50% calc(50% + 3.4px),100% 0,100% 100%;
   }
}
</style>