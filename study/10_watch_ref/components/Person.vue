<template>
    <div class="person">
        <h2>sum:{{ sum }}</h2>
        <button @click="changeSum">sum + 1</button>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    
    import {ref,watch} from 'vue' //引入watch函數

    //數據
    let sum = ref(0)

    function changeSum(){
        sum.value += 1
    }

    //監視
    //參數1:監視對象  參數2:回調函數
    const stopWatch = watch(sum,(newValue,oldValue)=>{ //參數1:新值  參數2:舊值
        console.log('sum changed...')
        console.log('newValue:' + newValue)
        console.log('oldValue:' + oldValue)
        //解除監視
        if(newValue >= 10){
            stopWatch()
        }
    })

</script>
    
<style scoped>

</style>
