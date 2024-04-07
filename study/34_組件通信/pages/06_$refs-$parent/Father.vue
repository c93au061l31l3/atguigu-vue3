<template>
    <div class="father">
      <h3>父組件</h3>
      <h3>house: {{ house }}</h3>
      <button @click="changeToy">修改Child1的toy</button>
      <button @click="changeComputer">修改Child2的Computer</button>
      <!-- $refs -->
      <button @click="getAllChild($refs)">獲取所有子組件的實例對象，並修改book</button>
      <Child1 ref="c1"/>
      <Child2 ref="c2"/>
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  import {ref} from 'vue'

  //數據
  let c1 = ref()
  let c2 = ref()
  let house = ref(4)

  //方法
  function changeToy(){
    //子組件要defineExpose數據，父組件才能拿到與修改數據
    c1.value.toy = 'drug'
  }
  function changeComputer(){
    c2.value.computer = 'dell'
  }
  //遍歷獲取所有子組件並修改book
  function getAllChild(refs:any){
    for(let key in refs){
      refs[key].book += 3;
    }
  }
  
  //向外部提供數據
  defineExpose({house})
  </script>
  
  <style scoped>
  .father{
      background-color: rgb(165, 164, 164);
      padding: 20px;
      border-radius: 10px;
  }
  </style>