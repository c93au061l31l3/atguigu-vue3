<template>
    <div class="father">
      <h3>父組件</h3>
      <h3>money : {{ money }}</h3>
      <h3>car :{ brand:{{ car.brand }}, price:{{ car.price }}}</h3>
      <Child/>
    </div>
  </template>
  
<script setup lang="ts" name="Father">

import Child from './Child.vue'
//引入provide
import {ref,reactive,provide} from 'vue'

//數據
let money = ref(100)
let car = reactive({
  brand:'bmw',
  price:1000
})

function updateMoney(value:number){
  money.value += value
}

//向後代提供數據與方法
provide('cashContext',{money,updateMoney})
provide('cart',car)


</script>
  
  <style scoped>
  .father{
      background-color: rgb(165, 164, 164);
      padding: 20px;
      border-radius: 10px;
  }
  </style>