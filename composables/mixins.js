//debounce timeout
let debounce_timeout;

export const debounce = (fn,value)=>{
    // clear old timeout
    if(debounce_timeout) clearTimeout(debounce_timeout);

    // set new timeout
    debounce_timeout = setTimeout(() => {
        // execute the function after the timeout period
        fn(value);
    }, 1000);

}

// export const chart =()=>{
     
//   var options = {
//     chart: {
//       type: 'bar'
//     },
//     series: [{
//       name: 'sales',
//       data: [30,40,45,50,49,60,70,91,125]
//     }],
//     xaxis: {
//       categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
//     }
//   }
  
//   var chart = new ApexCharts(document.querySelector("#chart"), options);
  
//   chart.render();
// }