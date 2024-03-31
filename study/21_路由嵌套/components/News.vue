<template>
    <div>
        <h3>news</h3>
        <!-- 導航區 -->
        <ul>
           <li v-for="news in newList" :key="news.id">
                <!-- 使用 RouterLink -->
                <RouterLink to="/news/detail">{{ news.title }}</RouterLink>
            </li>           
        </ul>
        <!-- 展示區 -->
        <div class="news-content">
            <RouterView></RouterView> <!-- 使用 RouterView -->
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
import {reactive} from 'vue'
import { RouterView ,RouterLink} from 'vue-router';

const newList = reactive([
    {id:'news001',title:'title1',content:'content1'},
    {id:'news002',title:'title2',content:'content2'},
    {id:'news003',title:'title3',content:'content3'},
    {id:'news004',title:'title4',content:'content4'},
    {id:'news005',title:'title5',content:'content5'}
])

</script>