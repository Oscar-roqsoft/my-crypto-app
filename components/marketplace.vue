<template>
    <div  class="py-3 bg-[#0d1b2f] my-4">
        <div  class="flex justify-between items-center p-3 text-xs w-full" >
             <div v-for="link  in marketplaceItems">
                 <a href="#" class="px-4 py-3 transition ease-linear  rounded-lg" @click="marketplaceCurrentItems=link.title"
                 :class="marketplaceCurrentItems===link.title?'bg-[#262c33] shadow-lg shadow-[#0d1b2f]':'bg-transparent'">{{ link.title }}</a>
             </div>

        </div>
    </div>

    <div v-for="item in marketplaceItems" :key="item" >
        

        <div v-if="item.title===marketplaceCurrentItems">
        
            <div class="px-5 flex justify-between items-center text-xs my-6  ">
                <a href="#">Spot</a>
                <span>Price(USDT)</span>
                <span>24h change</span>
            </div>
            
            <div>
                <div v-for="list in item.items">
        
                    <div class="px-5 flex justify-between items-center text-sm mb-4 ">
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
    
    </div>

    
</template>


<script setup>

    const marketplaceCurrentItems = ref("favourite coin")

     const marketplaceItems = [
        {
          title:"favourite coin" ,
          items:[
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
        },
        {
          title:"Top gainers" ,
          items:[
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
          ]
        },
        {
          title:"Top losers" ,
          items:[
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
        },
     ]

</script>