<template>
    <div>
        <h3>home</h3>
    </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter() //獲取路由器

onMounted(()=>{
    setTimeout(()=>{
        router.push('/news')
    },3000)
})

</script>