import { defineStore } from "pinia";
import axios from "axios";
import {nanoid} from 'nanoid'


import {reactive} from "vue"
export const useTalkStore = defineStore('talk',()=>{

    //talkList相當於state
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )

    //getATalk函數，相當於actions
    async function getATalk(){
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(),title:title}
        talkList.unshift(obj)
    }
    //要return
    return {talkList,getATalk}
})