<template>
    <div class="Game">
      <h3>game組件</h3>
        <!-- <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul> -->
        <!-- 給slot插槽綁定props屬性games，並將games傳給插槽的使用者(父組件) -->
        <!-- 上述便可以實現將Game組件的games[]傳給使用者 -->
        <slot :gemes="games" x="haha" y="hello"></slot>
    </div>
  </template>
  
  <script setup lang="ts" name="Game">

  import {ref,reactive} from 'vue'

  let games = reactive([
    {id:'game01',name:'gamename01'},
    {id:'game02',name:'gamename03'},
    {id:'game03',name:'gamename04'},
    {id:'game04',name:'gamename05'}
  ])

  
  </script>
  
  <style scoped>
  .Game{
      background-color:skyblue;
      border-radius: 10px;
      width: 200px;
      height: 300px;
      box-shadow: 0 0 10px;
  }
  
  </style>