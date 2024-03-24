<template>
    <div class="person">
        <!-- <h2>{{ a }}</h2>  -->
        <ul>
            <li v-for="item in list" :key="item.id">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Person">
    // import { defineProps ,withDefaults } from 'vue'; //可不用引入
    import { type Persons } from '../types';

    //接收父組件傳過來的 a
    //defineProps(['a']) 

    //接收父組件傳過來的 a和list，同時將props保存起來
    // let x = defineProps(['a'/*,'list'*/])
    // console.log(x)

    //接收list + 限制類型
    //defineProps<{list:Persons}>()

    //接收list + 限制類型 + 限制必要性 + 指定默認值
    withDefaults(defineProps<{list?:Persons}>(),
    {list: ()=> [ //默認值
        {id:'persion1',name:'nam1',age:11},
        {id:'persion2',name:'name2',age:12},
        {id:'persion3',name:'name3',age:13,x:11}
    ]})

</script>
    
<style scoped>

</style>
