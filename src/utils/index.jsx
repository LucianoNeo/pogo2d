function random(min,max) {
    const floatRandom = Math.random()
    const difference = max - min
    const rand = Math.floor(difference * floatRandom)
    const randomAboveMin = rand + min
    return randomAboveMin
    
}


function Utils() {
    return{
        random
    }
    
}

export default Utils