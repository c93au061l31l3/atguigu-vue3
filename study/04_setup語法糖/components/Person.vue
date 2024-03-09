<template>
    <div class="person">
        <h1>hello</h1>
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="showTel">show tel</button>
    </div>
</template>


<!-- 如果有多個script標籤，則要聲明語言，以保證語言一致。要直接命名記得先引入插件 -->
<!-- 引入插件: npm i vite-plugin-vue-setup-extend -D -->
<!-- 安裝完插件後，要在 vite.config.ts中加入插件 -->
<script setup lang="ts" name="PersonTest">
    let name = 'alex'
    let age = 33
    let tel = '11233' 

    function changeName(){
        name = 'htllo'
    }
    function changeAge(){
        age += 1
    }
    function showTel(){
        alert(tel)
    }

</script>


<style scoped>

</style>
