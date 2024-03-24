//
import {reactive,onMounted} from 'vue'
import axios from 'axios'

export default function(){
    let dogList = reactive([
        "https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_15144.jpg",
        "https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_7062.jpg",
        "https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_16112.jpg"
    ])

    async function getDog(){
        try{
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        }catch(error){
            alert(error)
        }
    }
    //鉤子
    onMounted(()=>{
        getDog()
    })

    //向外部提供東西
    return{dogList,getDog}
}

