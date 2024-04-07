import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    //真正存儲數據的地方
    state(){
        return{
            sum:6,
            school:'atguigu',
            address:'atguigu'
        }
    },
    //actions:動作方法，用於響應組件中的動作
    actions:{
        increment(value:number){
            if(this.sum < 10){
                //修改數據 (this是當前的store)
                this.sum += value;
            }
        }
    }
})