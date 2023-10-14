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