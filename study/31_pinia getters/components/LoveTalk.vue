<template>
    <div class="talk">
        <button @click="getLoveTalk">獲取一句土味情話</button>
        <ul >
            <!-- 使用storeToRefs讀取的數據 -->
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { storeToRefs } from 'pinia';
//引入useTalkStore
import {useTalkStore} from '../store/loveTalk'

const talkStore = useTalkStore()
//使用storeToRefs
const {talkList} = storeToRefs(talkStore)

async function getLoveTalk(){
    talkStore.getATalk()
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