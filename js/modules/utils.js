function addZero(num) {
  if (num >= 0 && num <= 9) {
	return '0' + num;
  } else {
	return num;
  }
}

function declOfNum(num, arr) {  
    num = Math.abs(num) % 100; 
    let num1 = num % 10;
    if (num > 10 && num < 20) { return arr[2]; }
    if (num1 > 1 && num1 < 5) { return arr[1]; }
    if (num1 == 1) { return arr[0]; }
    return arr[2];
}

export default {
  addZero,
  declOfNum,
};
