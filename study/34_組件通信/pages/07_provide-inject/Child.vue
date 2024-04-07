<template>
  <div class="Child">
    <h3>子組件</h3>
    <GrandChild/>
  </div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue';

</script>

<style scoped>
.Child{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>