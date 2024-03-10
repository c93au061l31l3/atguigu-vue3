<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2>
        <h2>age : {{ person.age }}</h2>
        <h2>car : {{ person.car.c1 }}, {{ person.car.c2 }}</h2>
        <button @click="changeName">changeName</button>
        <button @click="changeAge">changeAge</button>
        <button @click="changeC1">changeC1</button>
        <button @click="changeC2">changeC2</button>
        <button @click="changeCar">changeCar</button>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    
    import {reactive,watch} from 'vue' 

    //當person對象中的屬性也包含對象
    let person = reactive({
        name:'alex',
        age:33,
        car:{
            c1:'c1',
            c2:'c2'
        }
    })

    function changeName(){
        person.name += 'jp'
    }
    function changeAge(){
        person.age += 1
    }
    function changeC1(){
        person.car.c1 = 'cc1'
    }
    function changeC2(){
        person.car.c2 = 'cc2'
    }
    function changeCar(){
        person.car = {c1:'ccc1',c2:'ccc2'}
    }

    //監視

    //監視多個數據
    watch([()=>person.name,()=>{person.car.c1}],(newVal,oldVal)=>{
        console.log('person.car changeed...' + newVal,oldVal)
    },{deep:true}) //加上深度監視

</script>
    
<style scoped>

</style>
