import { defineStore } from 'pinia'


export const useStore = defineStore('app',()=> {
    const currentNavMenu = ref("home")
    return {currentNavMenu}
})


