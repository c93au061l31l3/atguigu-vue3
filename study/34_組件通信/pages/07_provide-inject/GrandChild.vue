<template>
    <div class="GrandChild">
        <h3>孫組件</h3>
        <h3>money : {{ money }}</h3>
        <h3>car :{ brand:{{ car.brand }}, price:{{ car.price }}}</h3>
        <button @click="updateMoney(10)">updateMoney</button>
    </div>
</template>

<script setup lang="ts" name="GrandChild">
//引入inject
import {inject} from 'vue'
//接收祖父組件的數據，如果沒接收到則 x=我是默認值
let {money,updateMoney} = inject('cashContext',{money:0,updateMoney:(x:number)=>{}})
let car = inject('cart',{brand:'unknown',peice:0})

</script>

<style scoped>
.GrandChild{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>