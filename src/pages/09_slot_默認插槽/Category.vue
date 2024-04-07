<template>
    <div class="Category">
      <h3>{{ title }}</h3>
      <!-- 接收默認插槽 -->
    <slot>默認內容</slot>
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