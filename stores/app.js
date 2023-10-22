import { defineStore } from 'pinia'


export const useStore = defineStore('app',()=> {
    const currentNavMenu = ref("home")
    const  currentAccMenu = ref("spot")
    const BankName = ref("")
    const accountName = ref("")
    const accountNumber = ref("")

    return {currentNavMenu,currentAccMenu,BankName,accountName,accountNumber}
})


