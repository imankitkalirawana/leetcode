/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
     var totalsum = (n * (n + 1)) / 2;

  let sumbeforei = 0;

  for (var i = 1; i <= n; i++) {
    sumbeforei += i;

    let sumafteri = totalsum - sumbeforei + i;
    if (sumbeforei == sumafteri) {
      return i;
    }
  }

  return -1;
};