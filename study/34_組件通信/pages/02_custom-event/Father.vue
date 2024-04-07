<template>
    <div class="father">
      <h3>父組件</h3>
      <!-- abc:自訂義事件名 。 xyz:事件的回調 -->
      <Child @abc="xyz"/> <!-- 給Child組件綁定一個abc事件，當abc事件被觸發即調用xyz -->
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref} from 'vue'
  
  //回調函數
  function xyz(value:string){
    console.log('xyz')
  }

  </script>
  
  <style scoped>
  .father{
      background-color: rgb(165, 164, 164);
      padding: 20px;
      border-radius: 10px;
  }
  </style>