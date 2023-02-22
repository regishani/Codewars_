function range (start, end, step = start<end ? 1: -1){
    let array = []
    if(start>0){
        for(let i=start; i<=end; i+=step){
        array.push(i)
        }
    }else{
        for(let i=start; i>=end; i+=step){
        }
    } return array
}
function sum(array){
    let total = 0
    for(let value in array){
        total += value
    }
    return total
}