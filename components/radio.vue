<template> 
    <button class="h-4 w-8 bg-gray-200 rounded-lg flex items-center" @click="toggleRadio()">
        <span  v-if="!isToggled"  class="flex justify-start items-start w-full ">
            <div  class="h-[18px] w-[18px] bg-[#05f8d0] rounded-full transition shadow-md ease-linear"></div>
        </span>
        <span  v-if="isToggled" class="flex justify-end items-end w-full">
            <div  class="h-[18px] w-[18px] bg-[#05f8d0] rounded-full transition shadow-md ease-linear"></div>
        </span>
    </button>

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