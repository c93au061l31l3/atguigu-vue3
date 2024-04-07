<template>
  <div class="Child1">
    <h3>子組件1</h3>
    <h3>toy: {{ toy }}</h3>
    <!-- 3.觸發emitter事件並把toy傳給Child2組件 -->
    <button @click="emitter.emit('send-toy',toy)">把玩具給Child2組件</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import {ref} from 'vue'

//2.引入emitter
import emitter from '@/utils/emitter';

//1.定義數據
let toy = ref('child1_toy')
</script>

<style scoped>
.Child1{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>