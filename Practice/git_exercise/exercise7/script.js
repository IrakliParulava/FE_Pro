let array = [1, 9, undefined, false, true, 0, ""]

function countFalsyValue(arr) {
    let count = 0;

    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] !== false || arr[i] !== 0 || arr[i] !== undefined || arr[i] !== null || arr[i] !== NaN || arr[i] !== "") {
            count++
        }
    }
    return count
}

console.log(countFalsyValue(array));
///// why this codde is not working?
// ??????????????????????????????????????????????????????????????????????????????????????????????????

/////////////////////
const valuesArray = [0, 1, '', undefined, false, true];

function checkCountTruthyFalsy(curArray) {
  let truthyCount = 0;
  
  for (let value of curArray) {
    if (value) {
      truthyCount++;
    }
  }
  return truthyCount;
}

console.log(checkCountTruthyFalsy(valuesArray));