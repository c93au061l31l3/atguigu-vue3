<template>
  <div class="GrandChild">
    <h3>孫組件</h3>
    <!-- 使用祖父組件的數據與方法 -->
    <h3>a : {{ a }}</h3>
    <h3>b : {{ b }}</h3>
    <h3>c : {{ c }}</h3>
    <h3>d : {{ d }}</h3>
    <h3>x : {{ x }}</h3>
    <h3>y : {{ y }}</h3>
    <button @click="updateA(1)">updateA</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
//接收祖父組件傳遞過來的數據與方法來實現祖孫組件的雙向數據綁定
defineProps(['a','b','c','d','x','y','updateA'])
</script>

<style scoped>
.GrandChild{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>