import { defineStore } from "pinia";
import axios from "axios";
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore('talk',{
    //真正存儲數據的地方
    state(){
        return{
            talkList:[
                {id:'loveTalk01',title:'LoveTalk01........'},
                {id:'loveTalk02',title:'LoveTalk02........'},
                {id:'loveTalk03',title:'LoveTalk03........'},
                {id:'loveTalk04',title:'LoveTalk04........'}
            ]
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