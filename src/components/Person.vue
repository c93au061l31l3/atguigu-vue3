<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2> <!-- toRefs()都會修改 -->
        <h2>age : {{ age }}</h2> <!-- toRefs()都會修改 -->
        <button @click="changeName">changeName</button>
        <button @click="changeAge">changeAge</button>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    //引入totoRefs
    import {reactive,toRefs} from 'vue'

    let person = reactive({
        name:'alex',
        age:33
    })

    let {name,age} =  toRefs(person) //用toRefs()解構賦值

    function changeName(){
        name.value += 'x'
    }
    function changeAge(){
        age.value += 1
    }

</script>
    
<style scoped>

</style>
