<template>
  <div class="Child2">
    <h3>子組件2</h3>
    <h3>computer: {{ computer }}</h3>
  </div>
</template>

<script setup lang="ts" name="Child2">
import {ref,onUnmounted} from 'vue'
//2.引入emitter
import emitter from '@/utils/emitter';

//1.定義數據
let computer = ref('child2_computer')

//3.給emitter綁定事件send-toy事件，並用value接受數據(toy)
emitter.on('send-toy',(value:any)=>{
  console.log('toy:' ,value)
})
//4.組件卸載時解綁事件
onUnmounted(()=>{
  emitter.off('send-toy')
})

</script>

<style scoped>
.Child2{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>