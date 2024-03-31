<template>
    <ul class="news-list">
        <li>id : {{query.id}}</li>
        <li>tilte : {{query.title}}</li>
        <li>content : {{query.content}}</li>
    </ul >
</template>

<script setup lang="ts" name="Detail">
import { toRefs } from 'vue';
//引入useRoute
import { useRoute } from 'vue-router';
let route = useRoute();

//必須使用toRefs()，否則直接解構響應式對象會失去響應式屬性
let {query} = toRefs(route)

</script>