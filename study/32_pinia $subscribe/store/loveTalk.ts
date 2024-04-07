import { defineStore } from "pinia";
import axios from "axios";
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore('talk',{
    //真正存儲數據的地方
    state(){
        return{
            //當取出為null則為空[]，以避免actions裡的unshift()報錯
            talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    },
    actions:{
        async getATalk(){
            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let obj = {id:nanoid(),title:title}
            this.talkList.unshift(obj)
        }
    }
})