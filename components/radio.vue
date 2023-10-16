<template> 
    <div class="h-4 w-8  rounded-lg flex items-center"
    :class="isToggled?'bg-green-500':'bg-gray-200'" @click="toggleRadio()">
        <span  v-if="!isToggled"  class="flex justify-start items-start w-full ">
            <div  :class="isToggled?'bg-gray-200':'bg-green-500'"
            class="h-[18px] w-[18px]  rounded-full transition shadow-md ease-in-out"></div>
        </span>
        <span  v-if="isToggled" class="flex justify-end items-end w-full">
            <div :class="isToggled?'bg-gray-200':'bg-gree-500'"
             class="h-[18px] w-[18px]  rounded-full transition shadow-md ease-in-out"></div>
        </span>
    </div>

</template>
<script>
export default{
    props:["toggleValue"],
    data(){
        return{
            isToggled: false,
        }
    },
    
    watch:{
        toggleValue(newVal){
            this.isToggled = newVal;
        }
    },

    methods:{
        toggleRadio(){
            this.isToggled = !this.isToggled;
            this.$emit("toggleChanged",this.isToggled);
        }
    }
}
</script>