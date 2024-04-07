<template>
    <div class="Category">
      <!-- 接收默認插槽 -->
    <slot name="slot1">默認內容</slot>
    <slot name="slot2">默認內容</slot>
    </div>
  </template>
  
  <script setup lang="ts" name="Category">
  
  defineProps(['title'])

  </script>
  
  <style scoped>
  .Category{
      background-color: skyblue;
      padding: 10px;
      box-shadow: 0 0 10px black;
      border-radius: 10px;
      width: 200px;
      height: 300px;
  }
  h3{
    background: orange;
    text-align: center;
  }
  </style>