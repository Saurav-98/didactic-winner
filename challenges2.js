// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

const dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(` Dolphins Average Score : ${dolphinAverageScore}
// Koalas Average Score : ${koalasAverageScore}
// `);

if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100) {
  console.log(`Dolphins are the Winner`);
} else if (
  dolphinAverageScore < koalasAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(`Koalas are the Winner`);
} else {
  if (dolphinAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log('The Score is Tied');
  } else {
    console.log('No Team wins the trophy');
  }
}
