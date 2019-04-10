

function emailFinder() {
  let dataset = require('./email-log.json');
  const findEmailAddress = dataset.emails.reduce(function (prev, current, index, array) {
    if (prev.hasOwnProperty(current.email)) {
      prev[current.email]++;
    } else {
      prev[current.email] = 1;
    }

    return prev;
  }, {})
  return {
    findEmailAddress,
  }
}

let emailModule = emailFinder();

console.log(emailModule.findEmailAddress)
// console.log(emailFinder