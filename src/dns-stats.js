const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the resultect with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {resultect}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArr = [];
  let result = {};
  domains.forEach(elem => {
    elem = elem.split('.').reverse();
    let tempArray = [];
    let tempString = '';
    for (let i = 0; i < elem.length; i++) {
      tempArray.push(elem[i]);
      tempString = tempArray.join('.');
      domainsArr.push(tempString);
    }
  })
  domainsArr.forEach(elem => {
    if (!result.hasOwnProperty('.' + elem)) {
      result['.' + elem] = 1;
    } else {
      result['.' + elem]++;
    }
  });
  return result;
}

module.exports = {
  getDNSStats
};
