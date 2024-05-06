// add whatever parameters you deem necessary
function longestFall(arr) {
    if(arr.length === 1) return 1;
    if(arr.length === 0) return 0;
    let longest = 1;
    let currLongest = 1;
    for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]) {
                currLongest++;
                if(longest < currLongest) longest = currLongest;
            } else {
                currLongest = 1;
            }
    }
    return longest
}
