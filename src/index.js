module.exports = function toReadable (number) {
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tens = ['0', '0', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  //let hundreds = ['hundred']
  number = number.toString();
  if (number < 20) return ones[number];
  if (number >= 20 && number < 100) {
    if (number % 10 === 0) return `${tens[number[0]]}`
    else return `${tens[number[0]]} ${ones[number[1]]}`
  }
  if (number >= 100 && number < 1000) {
    if (number % 100 === 0) return `${ones[number[0]]} hundred`
    else if (number.slice(1) < 20) {
      let subNum = +(number.slice(1));
      return `${ones[number[0]]} hundred ${ones[subNum]}`}
      else if (number.slice(1) % 10 === 0) return `${ones[number[0]]} hundred ${tens[number[1]]}`
      else return `${ones[number[0]]} hundred ${tens[number[1]]} ${ones[number[2]]}`
  }
}
