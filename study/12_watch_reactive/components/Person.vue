<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2>
        <h2>name : {{ person.age }}</h2>
        <button @click="changeName">changeName</button>
        <button @click="changeAge">changeAge</button>
        <button @click="changePerson">changePerson</button>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    
    import {reactive,watch} from 'vue' 

    let person = reactive({
        name:'alex',
        age:33
    })
    
    function changeName(){
        person.age += 1
    }
    function changeAge(){
        person.name += '~'
    }
    function changePerson(){
        person = {name:'Hitomi',age:33}
    }

    //監視
    //此時改變person.name或整個person對象都能被監視到，即默認開啟深度監視
    watch(person,(newVal,oldVal)=>{
        console.log('person changed...' + newVal,oldVal)
    })

</script>
    
<style scoped>

</style>
