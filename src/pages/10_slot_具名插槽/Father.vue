<template>
    <div class="father">
      <h3>父組件</h3>
        <div class="content">
          <!-- 傳送具名插槽 v-slot:slot2 -->
          <Category>
            <template v-slot:slot2>
              <ul>
                <li v-for="g in games " :key="g.id">{{ g.name }}</li>
              </ul>
            </template>
            <!-- 具名插槽簡寫 #slot1-->
            <template #slot1>
              <h3>今日熱門遊戲列表</h3>
            </template>
          </Category>

          <Category>
            <template v-slot:slot2>
              <img :src="imgUrl" alt="">
            </template>
            <template v-slot:slot1>
              <h3>今日美食城</h3>
            </template>
          </Category>

          <Category>
            <template v-slot:slot2>
              <video :src="videoUrl" controls></video>
            </template>
            <template v-slot:slot1>
              <h3>title3</h3>
            </template>
          </Category>
        </div>
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import {ref,reactive} from 'vue'

  let games = reactive([
    {id:'game01',name:'gamename01'},
    {id:'game02',name:'gamename03'},
    {id:'game03',name:'gamename04'},
    {id:'game04',name:'gamename05'}
  ])

  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg');
  let videoUrl = ref('http://clips.vorwaerts-gmbn.de/big_buck_bunny.mp4')
  
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