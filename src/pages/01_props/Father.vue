<template>
    <div class="father">
      <h3>父組件</h3>
      <h3>car:{{ car }}</h3>
      <!-- props傳值給子組件 -->
      <Child :cart="car" :sendToy="getToy"/>
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref} from 'vue'

  //data
  let car = ref('bmw')

  //定義接收子組件傳值的方法
  function getToy(value:string){
    console.log(value)
  }
  
  </script>
  
  <style scoped>
  .father{
      background-color: rgb(165, 164, 164);
      padding: 20px;
      border-radius: 10px;
  }
  </style>