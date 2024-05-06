//split integers to frequency map
function freqMap(int){
    const freq = new Map();
    for(let d of int.toString()){
        const count = freq.get(d) || 0;
        freq.set(d, count+1)
    }
    return freq
}
// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    //convert int to map
    const int1Map = freqMap(int1);
    const int2Map = freqMap(int2);
    //check if integers maps have the same size
    if(int1Map.size !== int2Map.size) return false;
    //if they do iterate the first integer digits and see if the freq match
    for(let key of int1Map.keys()){
        //if it doesn't match return false
        if(int1Map.get(key) !== int2Map.get(key)) return false
    }
    return true;
}
