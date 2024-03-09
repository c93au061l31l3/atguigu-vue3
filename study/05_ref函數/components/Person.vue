<template>
    <div class="person">
        <h1>hello</h1>
        <h2>name:{{ name }}</h2> <!-- 模板中不用+ .value -->
        <h2>age:{{ age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="showTel">show tel</button>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    import {ref} from 'vue' //引入ref函數
    let name = ref('alex')
    let age = ref(33) 
    let tel = '11233' 

    function changeName(){
        name.value = 'htllo' //要加上 .value
    }
    function changeAge(){
        age.value += 1
    }
    function showTel(){
        alert(tel)
    }

</script>


<style scoped>

</style>
