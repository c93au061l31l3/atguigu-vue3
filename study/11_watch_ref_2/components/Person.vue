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
    
    import {ref,watch} from 'vue' //引入watch函數

    let person = ref({
        name:'alex',
        age:33
    })
    //改變person對象裡的值時，不會觸發watch()
    function changeName(){
        person.value.age += 1
    }
    function changeAge(){
        person.value.name += '~'
    }
    //改變整個person對象裡的地址時，才會觸發watch()，若想監視對象內部屬性的變化，需要手動開啟深度監視
    function changePerson(){
        person.value = {name:'Hitomi',age:33}
    }

    //監視
    //watch的參數1:被監視的數據
    //watch的參數2:被監視的回調
    //watch的參數3:配置對象 (deep,immediate....)
    watch(person,(newValue,oldValue)=>{
        console.log('person changed...')
        console.log('newValue : ' + newValue)
        console.log('oldValue : ' + oldValue)
    },{deep:true}) //開啟深度監視

</script>
    
<style scoped>

</style>
