<template>
    <ul class="news-list">
        <li>id : {{ id }}</li>
        <li>tilte : {{ title }}</li>
        <li>content : {{ content }}</li>
    </ul >
</template>

<script setup lang="ts" name="Detail">
//直接用defineProps接收
defineProps(['id','title','content'])

</script>