<template>
    <div class="person">
        
    </div>
</template>

<script setup lang="ts" name="Person">
    
    import {type PersonInter, type Persons} from '@/types/index' //引入接口規範
    let person:PersonInter = {id:'ffff',name:'fff',age:33} //使用接口規範

    //定義一個數組，且數組內的每個對象都要符合規範
    let personList1:Array<PersonInter> = [
        {id:'ffff',name:'fff',age:33},
        {id:'cccc',name:'fccc',age:44},
        {id:'ggg',name:'ggg',age:52}
    ]

    let personList2:Persons = [
        {id:'ffff',name:'fff',age:33},
        {id:'cccc',name:'fccc',age:44},
        {id:'ggg',name:'ggg',age:52}
    ]
    
</script>
    
<style scoped>

</style>
