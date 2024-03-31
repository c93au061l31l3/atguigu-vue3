<template>
        <div class="app">
            <h2 class="title">vue route test</h2>
            <!-- navigate -->
            <div class="navigate">
                <!-- 使用路由組件 RouterLink -->
                <RouterLink to="/home">home</RouterLink>
                <RouterLink to="/news">news</RouterLink>
                <RouterLink to="/about">about</RouterLink>
            </div>
            <!-- display -->
            <div class="main-content">
                <RouterView></RouterView> <!-- 使用路由組件 引入路由組件RouterView -->
            </div>
        </div>
</template>

<script lang="ts" setup name="App">
    import {RouterView,RouterLink} from 'vue-router' //引入路由組件RouterView, RouterLink
</script>

<style>
    
</style>