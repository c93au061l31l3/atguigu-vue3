<template>
  <div class="Child">
    <h3>子組件</h3>
    <h3>toy: {{ toy }}</h3>
    <!-- 使用父組件傳值 -->
    <h3>father car: {{ cart }}</h3>
    <!-- 使用父組件傳過來的方法 -->
    <button @click="sendToy(toy)">send toy to father</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue'
//data
let toy = ref('dragon')
//接收父組件props值
defineProps(['cart','sendToy'])

</script>

<style scoped>
.Child{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>