<template>
    <div class="person">
        姓: <input type="text" v-model="firstName"/> <br>
        名: <input type="text" v-model="lastName"/> <br>
        全名: <span>{{ fullName }}</span>
        <buttom @click="changeFullName">change fullName</buttom>
    </div>
</template>

<script setup lang="ts" name="PersonTest">
    
    import {ref,computed} from 'vue' //引入computed函數

    let firstName = ref('chang')
    let lastName = ref('alex')

    //這樣定義的fullName是一個計算屬性，且為只讀的
    let fullName = computed(()=>{ //調用computed()
        return firstName.value.slice(0,1).toUpperCase +firstName.value.slice(1) + lastName.value
    })

    //這樣定義的fullName是一個計算屬性，且能修改
    let fullName2 = computed({ 
        get(){
            return firstName.value.slice(0,1).toUpperCase +firstName.value.slice(1) + '-' + lastName.value 
        },
        set(val){ //會收到參數(julia)
            console.log(val)
            //分解收到的參數並修改firstName與lastName來實現功能
            const [str1,str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName(){
        fullName2.value = 'julia'
    }

</script>
    
<style scoped>

</style>
