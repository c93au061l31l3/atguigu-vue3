<template>
    <div class="father">
      <h3>父組件</h3>
      <!-- 1. v-model用在html標籤 -->
      <input type="text" v-model="username"><br>
      <!-- v-model的底層實現 : 動態:value值 + @input事件-->
      <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"><br> -->

      <!-- 2. v-model用在組件標籤(AtguiguInput是自訂義組件) -->
      <AtguiguInput v-model="username"/> <br>
      <!-- v-model用在組件標籤的底層實現 -->
      <!-- 給AtguiguInput組件傳遞:modelValue，並給其綁定事件@update:modelValue -->
      <AtguiguInput 
        :modelValue="username" 
        @update:modelValue="username = $event"
      />
        
    </div>
</template>
  
<script setup lang="ts" name="Father">
import AtguiguInput from './AtguiguInput.vue'

import {ref} from 'vue'
let username = ref('zhansgan')

</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>