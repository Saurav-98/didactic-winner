// const age = 17;
// const isOldEnogh = age >= 18;

// if (isOldEnogh) {
//   console.log('You are eligible to Vote.');
// } else {
//   const yearsleft = 18 - age;
//   console.log(`You are Young, Wait another ${yearsleft} years.`);
// }

// const birthYear = 2008;
// let century;
// if (birthYear < 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// const inputYear = '1992';
// console.log(Number(inputYear) + 18);
// console.log(typeof 123);

// console.log('I am ' + 24 + ' years old.');

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean('Saurav'));
// console.log(Boolean({}));
// console.log(Boolean(1));
// console.log(Boolean([]));

// const favorite = prompt('What is your favorite number?');
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log('23 is an Amazing Number');
// }

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(!hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence || hasGoodVision);

const day = 'wedndesday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to Coding Meetup');
    break;

  case 'tuesday':
    console.log('Prepare Theory Videos');
    break;

  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;

  case 'friday':
    console.log('Record Videos');
    break;

  case 'saturday':
  case 'sunday':
    console.log('Enjoy the Weekend!');
    break;

  default:
    console.log('Not the day of week');
    break;
}
