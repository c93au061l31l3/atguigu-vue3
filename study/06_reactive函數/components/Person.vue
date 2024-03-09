<template>
    <div class="person">
        <h2>一輛{{car.brand}} ， 價格{{car.price}}</h2>
        <button @click="changePrice">changePrice</button>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeFirstGameName">changeFirstGameName</button>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    //引入reactive()
    import {reactive} from 'vue'

    //data
    let car = reactive({brand:"bmw",price:100}) //使用reactive函數
    let games = reactive([
        {id:'01',name:'game1'},
        {id:'02',name:'game2'},
        {id:'03',name:'game3'}
    ])

    function changePrice(){
        car.price += 10
    }
    function changeFirstGameName(){
        games[0].name = 'change'
    }

</script>


<style scoped>

</style>
