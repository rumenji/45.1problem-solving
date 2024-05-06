function freqCounter(str){
    const freq = {}
    for(let char of str){
        freq[char] = freq[char] + 1 || 1 
    }
    return freq
}
// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const freqMsg = freqCounter(msg);
    const freqLetters = freqCounter(letters);
    for(let key in freqMsg){
        if(!freqLetters[key]) return false;
        if(freqLetters[key] < freqMsg[key]) return false
    }
    return true
}
