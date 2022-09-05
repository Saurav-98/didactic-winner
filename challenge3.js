const billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? 0.15 : 0.2;
const finalBill = billValue + billValue * tip;
console.log(
  `The bill was ${billValue}, the tip was ${
    billValue * tip
  }, and the total value ${finalBill} `
);
