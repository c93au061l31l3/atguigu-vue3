<template>
    <ul class="news-list">
        <li>id : {{ route.params.id }}</li>
        <li>tilte : {{ route.params.tilte }}</li>
        <li>content : {{ route.params.content }}</li>
    </ul >
</template>

<script setup lang="ts" name="Detail">
//引入useRoute接收params
import { useRoute } from 'vue-router';
const route = useRoute()

</script>