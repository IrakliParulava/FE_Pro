function isOddEvenNumber(num) {
  for(let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i , 'EVEN');
    } else {
      console.log(i , 'ODD');
    }
  }
}

isOddEvenNumber(10);
