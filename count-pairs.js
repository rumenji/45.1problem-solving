// add whatever parameters you deem necessary
function countPairs(arr, sum) {
    let result = 0;
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(sum === arr[i] + arr[j]) {
                arr.splice(j, 1)
                result++;
            }
        }
    }
    return result
}
