//定義一個接口，用於限制person對象的具體屬性
export interface PersonInter {
    id:string,
    name:string,
    age:number,
    x?:number //?代表這個屬性可選的
} 

export type Persons = Array<PersonInter>
//一個自訂義類型
export type Persons2 = PersonInter[]