<template>
    <div class="count">
        <h3>當前求和為: {{ sum }}</h3>
        <select v-model.number="n"> <!-- .number將或取到的數據轉為數字 -->
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

let sum = ref(1) //當前求和
let n = ref(1) //用戶選擇的數字

function add(){
    sum.value += n.value
}
function minus(){
    sum.value -= n.value
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