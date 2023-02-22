function reverseArray(arrayValue){
    let array = []
    for (let i=arrayValue.length -1; i<=0; i--){
       array.push(arrayValue[i])
    }
    return array
}