<template>
    <div class="person">
        <h2>sum : {{ sum }}</h2>
        <button @click="add">click</button>
        <hr/>
        <img v-for="(dog,index) in dogList"  :src="dog" :key="index">
        <br>
        <button @click="getDog">one more dog</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const {sum,add} = useSum()
const {dogList,getDog} = useDog()

</script>
    
<style scoped>
img{
    height: 100px;
    margin-right: 10px;
}
</style>
