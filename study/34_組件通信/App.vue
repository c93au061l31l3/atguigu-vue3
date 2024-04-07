<template>
        <div>
            <h1>組件通信</h1>
            <hr>
            <div class="row">
                <div>
                    <router-link active-class="active" to="/props">1.props</router-link><br>
                    <router-link active-class="active" to="/event">2.event</router-link><br>
                    <router-link active-class="active" to="/mitt">3.mitt</router-link><br>
                    <router-link active-class="active" to="/model">4.model</router-link><br>
                    <router-link active-class="active" to="/attrs">5.attrs</router-link><br>
                    <router-link active-class="active" to="/ref-parent">6.ref-parent</router-link><br>
                    <router-link active-class="active" to="/provide">7.provide</router-link><br>
                    <router-link active-class="active" to="/pinia">8.pinia</router-link><br>
                    <router-link active-class="active" to="/slot">9.slot</router-link><br>
                </div>
                <hr>
                <div>
                    <h2>展示</h2>
                    <router-view></router-view>
                </div>
            </div>
        </div>
        
</template>

<script lang="ts" setup name="App">


</script>

<style>
    
</style>