<template>
        <Person a="haha" :list="persionList2"/> <!--把a傳給Person組件-->
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {reactive} from 'vue'
    import {type Persons} from './types'

    //reactive搭配type 方法1 :
    let persionList:Persons = reactive([
        {id:'persion1',name:'nam1',age:11},
        {id:'persion2',name:'name2',age:12},
        {id:'persion3',name:'name3',age:13}
    ])

    //reactive搭配type 方法2(泛型寫法) :
    let persionList2 = reactive<Persons>([
        {id:'persion1',name:'nam1',age:11},
        {id:'persion2',name:'name2',age:12},
        {id:'persion3',name:'name3',age:13,x:11}
    ])
</script>

<style>
    .app{
        background-color: aqua;
    }
</style>