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
    //只監視響應式對象中的某個屬性，且該屬性為基本類型數據時，要寫成函數式
    watch(()=>{return person.name},(newVal,oldVal)=>{
        console.log('person change...' + newVal,oldVal)
    })

    //這種寫法當改變整個person.car對象時，watch監視不到
    watch(person.car,(newVal,oldVal)=>{
        console.log('person.car changeed...' + newVal,oldVal)
    })

    //當寫成函數式時，watch監視的對象為person.car的地址值，此時修改person.car.c1反而監視不到，但修改整個person.car會被監視
    watch(()=>person.car,(newVal,oldVal)=>{
        console.log('person.car changeed...' + newVal,oldVal)
    })

    //加上深度監視後，修改person.car.c1或修改整個person.car都可以被監視到
    watch(()=>person.car,(newVal,oldVal)=>{
        console.log('person.car changeed...' + newVal,oldVal)
    },{deep:true}) //加上深度監視

</script>
    
<style scoped>

</style>
