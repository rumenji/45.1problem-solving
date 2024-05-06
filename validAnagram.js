function freqCounter(str){
    const freq = {};
    for(let char of str){
        freq[char] = (freq[char] + 1) || 1;
    }
    return freq;
}

function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    const freqStr1 = freqCounter(str1);
    const freqStr2 = freqCounter(str2);
    for(let key in freqStr1){
        if(!freqStr2[key]) return false;
        if(freqStr2[key] !== freqStr1[key]) return false;
    }
    return true;
}