<template>
  <div class="Child">
  <h3>子組件</h3>
  <!-- 子組件使用v-bind把整個$attrs傳給孫組件，來實現祖孫組件的雙向數據綁定 -->
  <GrandChild v-bind="$attrs"/>
  </div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue'

</script>

<style scoped>
.Child{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>