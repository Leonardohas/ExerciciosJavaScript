function aVeryBigSum(ar) {
    var sum = 0;
    var array = ar;
    for(var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}