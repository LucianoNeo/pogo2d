function random(min,max) {
    const floatRandom = Math.random()
    const difference = max - min
    const rand = Math.floor(difference * floatRandom)
    const randomAboveMin = rand + min
    return randomAboveMin
    
}

function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  };

function Utils() {
    return{
        random,
        leftPad
    }
    
}




export default Utils