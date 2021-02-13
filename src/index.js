
exports.min = function min (array) {
  if (!Array.isArray(array)) return 0;
  let result = array[0]
  for (let num of array) {
    if (!num && num !== 0) return 0; 
    if (result > num) result = num;
  };
  return (result == undefined) ? 0 : result;
};

exports.max = function max (array) {
  if (!Array.isArray(array)) return 0;
  let result = array[0];
  for (let num of array) {
    if (!num && num !== 0) return 0; 
    if (result < num) result = num;
  };
  return (result == undefined) ? 0 : result;
};

exports.avg = function avg (array) {
  if (!Array.isArray(array)) return 0;
  let result = 0;
  for (let num of array) {
    if (!num && num !== 0) return 0; 
    result += num;
  };
  result /= (array.length);
  return (!result) ? 0 : result;
};