<template>
        <Person ref="refTest" /> <!--獲取組件實例對象-->
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    
</script>

<style>
    .app{
        background-color: aqua;
    }
</style>