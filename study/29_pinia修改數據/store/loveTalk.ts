import { defineStore } from "pinia";

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
    }
})