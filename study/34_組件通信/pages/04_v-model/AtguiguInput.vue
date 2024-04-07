<template>
    <!-- 實現modelValue的雙向綁定(UI組件庫底層就是這樣實現的) -->
    <input 
        type="text" 
        :value="modelValue"
        @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)"
    >
</template>
  
<script setup lang="ts" name="AtguiguInput">
//接收:modelValue
defineProps(['modelValue'])
//接收update:modelValue事件
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
input{
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
}
</style>