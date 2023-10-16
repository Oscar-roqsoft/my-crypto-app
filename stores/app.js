import { defineStore } from 'pinia'


export const useStore = defineStore('app',()=> {
    const currentNavMenu = ref("home")
    const  currentAccMenu = ref("spot")
    return {currentNavMenu,currentAccMenu}
})


