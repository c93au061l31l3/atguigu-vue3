<template>
    <div class="talk">
        <button @click="getLoveTalk">獲取一句土味情話</button>
        <ul >
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import {reactive} from 'vue'
import axios from 'axios';
import {nanoid} from 'nanoid'

let talkList = reactive([
    {id:'loveTalk01',title:'LoveTalk01........'},
    {id:'loveTalk02',title:'LoveTalk02........'},
    {id:'loveTalk03',title:'LoveTalk03........'},
    {id:'loveTalk04',title:'LoveTalk04........'},
])

async function getLoveTalk(){
    //發請求
    //解構賦值，從返回結果data中解構content，再把content重新命名為title
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    //包裝請求結果
    let obj = {id:nanoid(),title:title}
    talkList.unshift(obj)
}


</script>

<style scoped>
.talk{
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>