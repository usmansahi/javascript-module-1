function givenmessage (msg){
    if (msg === 'happy'){
        return `${msg} good job you doing great `
    }else if (msg === 'sad'){
       return `${msg} good job you doing great `
    }else if (typeof msg === 'number'){
       return `${msg} beep beep boop `
 } else{
    return `${msg} am sorry still working on it `
 }

}
console.log(givenmessage(3))