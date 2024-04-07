<template>
    <div class="count">
        <!-- 使用storeToRefs讀取的數據 -->
        <h3>當前求和為: {{sum}}</h3>
        <h3>school: {{school}}</h3>
        <h3>address: {{address}}</h3>
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
import {ref,toRefs} from 'vue'
import { storeToRefs } from 'pinia';

//引入useCountStore
import {useCountStore} from '@/store/count'
const countStore = useCountStore();
//用toRefs雖然也能實現響應式數據，但不建議，因為會把整個countStore都變成響應式數據
//const {sum,school,address} = toRefs(countStore);

//故建議用storeToRefs，故建議用storeToRefs，只關注countStore中的數據，而不會對方法進行ref包裹
const {sum,school,address} = storeToRefs(countStore);

let n = ref(1) 

function add(){
    countStore.increment(n.value);
}
function minus(){
    countStore.sum -=n.value;
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