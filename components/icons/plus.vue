
<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path :fill="colorchange || black" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"></path></svg>
  </template>
  
  <script>
  export default {
    props:["colorchange"],
    name: 'MaterialSymbolsAdd'
  }
  </script>