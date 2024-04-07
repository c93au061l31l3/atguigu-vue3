<template>
  <div class="Child">
    <h3>子組件</h3>
    <h3>toy : {{ toy }}</h3>
    <!-- 觸發abc事件並傳遞數據 -->
    <button @click="emit('abc',toy)">test</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import {ref,onMounted} from 'vue'
let toy = ref('dragon')

//聲明事件
const emit = defineEmits(['abc'])

// onMounted(()=>{
//   setTimeout(()=>{
//     //調用abc事件
//     emit('abc')
//   },3000)
// })

</script>

<style scoped>
.Child{
    margin-top: 10px;
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>