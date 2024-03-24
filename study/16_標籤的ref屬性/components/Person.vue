<template>
    <div class="person">
        <h1>h1</h1>
        <h2 ref="title2">h2</h2> <!--獲取dom節點-->>
        <h3>h3</h3>
        <button @click="showLog">show log</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import {ref} from 'vue'

    //創建一個title2，且不用指定初始值，用於存處ref標記的內容
    let title2 = ref();

    function showLog(){
        console.log(title2.value)
    };

</script>
    
<style scoped>

</style>
