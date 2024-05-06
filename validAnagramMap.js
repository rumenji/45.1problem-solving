function freqCounter(str){
    const freq = new Map();
    for(let char of str){
        let charCount = freq.get(char) || 0;
        freq.set(char, charCount +1);
    }
    return freq;
}

function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    const freqMap1 = freqCounter(str1);
    const freqMap2 = freqCounter(str2);
    if(freqMap1.size !== freqMap2.size) return false;
    for(let char of freqMap1.keys()){
        if(freqMap2.get(char) !== freqMap1.get(char)) return false;
    }
    return true;
}