<template>
  <div class="Child2">
    <h3>子組件2</h3>
    <h3>computer: {{ computer }}</h3>
    <h3>book: {{ book }} 本</h3>
  </div>
</template>

<script setup lang="ts" name="Child2">
import {ref} from 'vue'

//數據
let computer = ref('msi')
let book = ref(6)

//把數據交給外部
defineExpose({computer,book})

</script>

<style scoped>
.Child2{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>