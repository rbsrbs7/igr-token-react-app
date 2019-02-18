const checkDigit = barcode => {
  let sum = 0;
  let factor = 0;
  let rest = 0;
  let digit = 0;
  for(var i = 0; i < barcode.length - 1; i++) {
    var value = 0; 
    if(i % 2 !== 0) {
      value = parseInt(barcode[i]) * 3;
      sum += value;
    } else {
      value = parseInt(barcode[i]) * 1;
      sum += value;
    }
  }
  factor = sum % 10;
  rest = 10 - factor;
  mult = (sum + rest);
  digit = mult - sum;
  return (parseInt(barcode[12]) === digit);
}

export default checkDigit;