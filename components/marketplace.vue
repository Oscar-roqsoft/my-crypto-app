<template>
    <div  class="py-3 bg-[#0d1b2f] my-4">
        <div  class="flex justify-between items-center p-3 text-xs w-full" >
             <div v-for="(_,k)  in marketplaceItems">
                 <a href="#" class="px-4 py-3 transition ease-linear capitalize rounded-lg" @click="marketplaceCurrentItems=k"
                 :class="marketplaceCurrentItems===k?'bg-[#262c33] shadow-lg shadow-[#0d1b2f]':'bg-transparent'">{{ k.split("_").join(" ") }}</a>
             </div>
        </div>
    </div>

    <div>
        <div class="px-5 flex justify-between items-center text-xs my-6">
            <a href="#">Spot</a>
            <span>Price(USDT)</span>
            <span>24h change</span>
        </div>
        
        <div >
            <div v-for="(list,i) in filteredItems.length ? filteredItems : marketplaceItems[marketplaceCurrentItems]" :key="i">
                <div class="px-5 flex justify-between items-center text-sm mb-4">
                    <div class="flex justify-center items-center">
                        <div class="h-4 w-4 bg-yellow-300 rounded-full mr-2"></div>
                        <div>{{ list.coinSymbol }}</div>
                    </div>
                    <div class="">{{ list.price }}</div>
                    <span class="text-[#53FF83]  h-9 w-16 bg-[#48615b] inline-flex justify-center items-center text-center text-xs rounded-md">{{ list.pricePercentage }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import {debounce} from "@/composables/mixins";

    const marketplaceCurrentItems = ref("favourite");
    const filteredItems = ref([]);
    
     const marketplaceItems = {
        "favourite": [
            {
              coinSymbol:"BTC", 
              price: '453,678' ,
              pricePercentage: "+134"
            },
            {
              coinSymbol:"ETH", 
              price: '353,678' ,
              pricePercentage: "+34"
            },
            {
              coinSymbol:"BNB", 
              price: '153,678' ,
              pricePercentage: "+204"
            }
        ],
        "top_gainers":[
            {
              coinSymbol:"BTC", 
              price: '453,678' ,
              pricePercentage: "+234"
            },
            {
              coinSymbol:"ETH", 
              price: '11,678' ,
              pricePercentage: "+309"
            },
            {
              coinSymbol:"ETH", 
              price: '453,678' ,
              pricePercentage: "+24"
            },
        ],
        "top_losers":[
            {
              coinSymbol:"BTC", 
              price: '453,678' ,
              pricePercentage: "+134"
            },
            {
              coinSymbol:"ETH", 
              price: '453,678' ,
              pricePercentage: "+34"
            },
            {
              coinSymbol:"BTC", 
              price: '453,678' ,
              pricePercentage: "+204"
            }
        ]
    };

    const filterCoins = (v)=>{
        if(v.length){
            filteredItems.value = marketplaceItems[marketplaceCurrentItems.value].filter(u=>u.coinSymbol.toLowerCase().includes(v.toLowerCase()));
        }else{
            filteredItems.value = [];
        }
    };

    // how to use props in vue composition api
    // const props = defineProps(['foo'])
    // console.log(props.foo)
    const props = defineProps(["filterInput"]);
    
    watch(()=>props.filterInput,(newVal)=>{
        debounce(filterCoins,newVal)
    })
</script>