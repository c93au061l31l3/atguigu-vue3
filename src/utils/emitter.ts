//引入mitt
import mitt from "mitt";
//調用mitt()得到emitter，emitter能綁定事件&觸發事件
const emitter = mitt();

//綁定事件
// emitter.on('test1',()=>{
//     console.log('test1被調用了')
// })
// emitter.on('test2',()=>{
//     console.log('test2被調用了')
// })


// setTimeout(()=>{
//     //觸發事件
//     emitter.emit('test1');
//     emitter.emit('test2');
// },3000)

// setTimeout(()=>{
//     //解綁事件
//     emitter.off('test1');
//     //解綁所有事件
//     emitter.all.clear()
// },5000)


export default emitter;