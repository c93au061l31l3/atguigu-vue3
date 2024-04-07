<template>
  <div class="Child1">
    <h3>子組件1</h3>
    <h3>toy: {{ toy }}</h3>
    <h3>book: {{ book }} 本</h3>
    <!-- $parent可以獲取父組件defineExpose的內容 -->
    <button @click="minusHouse($parent)">幹掉父組件的一棟house</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import {ref} from 'vue'

//數據
let toy = ref('dragon')
let book = ref(3)

//把數據交給外部
defineExpose({toy,book})

function minusHouse(parent:any){
  parent.house -= 1;
}

</script>

<style scoped>
.Child1{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>