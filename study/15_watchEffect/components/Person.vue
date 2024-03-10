<template>
    <div class="person">
        
        <h2>水溫 : {{ temp }}</h2>
        <h2>水位 : {{ height }}</h2>
        <button @click="changetemp">changeTemp</button>
        <button @click="changeHeight">changeHeight</button>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    
    import {ref,watch,watchEffect} from 'vue' 

    let temp = ref(10)
    let height = ref(0)

    function changetemp(){
        temp.value += 10
    }
    function changeHeight(){
        temp.value += 10
    }

    //監視當temp達到60或height達到80時
    watch([temp,height],(value)=>{
        //從value中獲取最新的水溫與水位
        let [newTemp,newHeight] = value
        if(newTemp >= 60 || newHeight >= 80){
            console.log('watch...')
        }
    })

    //watchEffect會自己分析要監視誰
    //watchEffect的回調函數一開始就會調用一次
    watchEffect(()=>{

        if(temp.value >= 60 || height.value >= 80){
            console.log('watchEffect...')
        }
    })

</script>
    
<style scoped>

</style>
