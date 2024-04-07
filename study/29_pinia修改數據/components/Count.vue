<template>
    <div class="count">
        <!-- 使用countStore -->
        <h3>當前求和為: {{countStore.sum}}</h3>
        <h3>school: {{countStore.school}}</h3>
        <h3>address: {{countStore.address}}</h3>
        <select v-model.number="n"> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">add</button>
        <button @click="minus">minus</button>
    </div>
</template>

<script lang="ts" setup name="Count">
import {ref} from 'vue'

//引入useCountStore
import {useCountStore} from '@/store/count'
const countStore = useCountStore();

let n = ref(1) 

function add(){
    //第一種修改數據的方式
    // countStore.sum += 1

    //第二種修改數據的方式，批量修改(這種方法在Timeline中就只有一次變更)
    // countStore.$patch({
    //     sum:100,
    //     school:'test',
    //     address:'test'
    // })

    //第三種修改數據的方式，調用動作
    countStore.increment(n.value)
}
function minus(){
    
}

</script>

<style scoped>
.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 25px;
}
</style>