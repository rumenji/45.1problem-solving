// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    for(let i of arr){
        const avg = (arr[left] + arr[right]) / 2;
        if(avg === target) {
            return true;
        } else if(avg > target) {
            right--;
        } else {
            left++;
        }
    }
    return false
}
