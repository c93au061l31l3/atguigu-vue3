<template>
        <person/>
</template>

<script>
    import Person from './components/Person.vue'
    export default{
        name:'App', //組件名
        components:{Person} //註冊組件
    }
</script>

<style>
    .app{
        background-color: aqua;
    }
</style>