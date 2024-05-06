function pivotIndex(arr) {
    if(arr.length < 3) return -1
    const totalSum = arr.reduce((a,b) => a+b, 0);
    let leftSum = 0;
    const pivotIndexes = [];
    for(let i=0; i<arr.length; i++){
        if(leftSum === totalSum - leftSum - arr[i]){
            pivotIndexes.push(i);
        }
        leftSum = leftSum + arr[i];
    }
    if(pivotIndexes.length === 0) return -1
    return Math.min(...pivotIndexes)
}

