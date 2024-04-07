<template>
    <div class="father">
      <h3>父組件</h3>
      <h3>a: {{ a }}</h3>
      <h3>b: {{ b }}</h3>
      <h3>c: {{ c }}</h3>
      <h3>d: {{ d }}</h3>
      <!-- v-bind="{x:100,y:200}" 幾乎等同於 :x="100" :y="200"-->
      <!-- 父組件向子組件傳遞數據與方法來實現祖孫組件的雙向數據綁定 -->
      <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref} from 'vue'

  let a = ref(1)
  let b = ref(2)
  let c = ref(3)
  let d = ref(4)

  function updateA(value:number){
    a.value += value
  }
  
  </script>
  
  <style scoped>
  .father{
      background-color: rgb(165, 164, 164);
      padding: 20px;
      border-radius: 10px;
  }
  </style>