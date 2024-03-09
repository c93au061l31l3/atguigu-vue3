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
    //引入ref()
    import {ref} from 'vue'

    //data
    let car = ref({brand:"bmw",price:100}) //使用ref函數
    let games = ref([
        {id:'01',name:'game1'},
        {id:'02',name:'game2'},
        {id:'03',name:'game3'}
    ])

    function changePrice(){
        car.value.price += 10 //.value
    }
    function changeFirstGameName(){
        games.value[0].name = 'change' //.value
    }

</script>


<style scoped>

</style>
