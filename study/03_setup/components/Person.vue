<template>
    <div class="person">
        <h1>hello</h1>
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="showTel">show tel</button>
    </div>
</template>

<script>
    export default{
        name:'Person',
        setup(){
            //console.log(this) setup()函數中的this是undefined
            //data
            let name = 'alex'
            let age = 33
            let tel = '11233' //此時的數據不是響應式

            //methods
            function changeName(){
                name = 'htllo'
            }
            function changeAge(){
                age += 1
            }
            function showTel(){
                alert(tel)
            }

            return{name,age,changeAge,changeName,showTel} //{name:name,age:age}的簡寫形式
        }
    }
</script>

<style scoped>

</style>
