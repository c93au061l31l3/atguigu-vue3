<template>
    <div class="father">
      <h3>父組件</h3>
        <div class="content">
          <Game>
            <!-- 使用v-slot="a" 接收所有slot傳過來的props，此時params即對象(包含所有props) -->
            <template v-slot="params">
              <ul>
                <li v-for="g in params.games" :key="g.id">{{ g.name }}</li>
              </ul>
            </template>
          </Game>

          <Game>
            <!-- v-slot="{games}" -> 也可以直接解構slot傳過來的數據 -->
            <template v-slot="{games}">
              <ol>
                <li v-for="g in games" :key="g.id">{{ g.name }}</li>
              </ol>
            </template>
          </Game>

          <Game>
            <template v-slot="params">
              <h3 v-for="g in params.games" :key="g.id">{{ g.name  }}</h3>
            </template>
          </Game>
        </div>
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
  import Game from './Game.vue'

  </script>
  
  <style scoped>
  .father{
      background-color: rgb(165, 164, 164);
      padding: 20px;
      border-radius: 10px;
  }
  .content{
    display: flex;
    justify-content: space-evenly;
  }
  img , video{
    width: 100%;
  }
  </style>