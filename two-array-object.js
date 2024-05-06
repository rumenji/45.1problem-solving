// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    //create empty object
    const obj = {}
    //loop each item in arr1
    for(let i=0; i<arr1.length; i++){
        //if arr2[i] is undefined add null
        const value = arr2[i] || null;
        //add new key for arr1[i] to obj and value of arr2[i]
        obj[arr1[i]] = value;
    }
    return obj;
}
