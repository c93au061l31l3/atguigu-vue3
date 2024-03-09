<template>
    <div class="person">
        <h1>hello</h1>
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="showTel">show tel</button>
    </div>
</template>

<script>
    export default{
        name:'Person',
        data(){
            return{
                name:'alex',
                age:20,
                tel:'11233'
            }
        },
        methods:{
            showTel(){
                alert(this.tel)
            }
        }
    }
</script>

<style scoped>

</style>
