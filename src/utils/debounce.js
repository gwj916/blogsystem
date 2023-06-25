export default function(fn,duration=100){
    let time=null
    return (...args)=>{
        clearTimeout(time)
        time=setTimeout(() => {
            fn(...args)
        }, duration);       
    }
}