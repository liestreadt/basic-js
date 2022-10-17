// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
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
  const uniqueArrs = [];
  const Strings = []
  const arr = domains.map(item => [item = item.split('.').join('.'), 0]);
  const result = Object.fromEntries(new Map(arr));
  result['.ru'] = 0;
  const allFilters = domains.map(item => {
    console.log(item);
    return [item.match(/[a-z]+\.[a-z]+\.[a-z]+/ig), item.match(/\.*[a-z]+\.[a-z]+/ig), item.match(/\.[a-z]+$/ig)]
  });

  allFilters.map(item => uniqueArrs.push(...item));
  uniqueArrs.filter(elem => elem).map(item => Strings.push(...item));
  const uniqueStrings = Array.from(new Set(Strings));

  uniqueStrings.forEach(elem => {
    domains.forEach(i => {
      console.log('tsest');
      new RegExp(elem).test(i)
      ?
      new RegExp(/.ru/).test(elem) ? result[i.match(new RegExp(elem))[0]]++ : ''
      :
      '';
    })
  })

  const tempResult = Object.keys(result).map(key => {
    let reverseItem = '.' + key.split('.').reverse().join('.');
    return reverseItem === '.ru.' ? [key, reverseItem = reverseItem.split('').slice(0,3).join('')] : [key, reverseItem];
  });
  const properResult = Object.fromEntries(new Map(tempResult));
  return Object.keys(result).map(key => {
    const newKey = properResult[key] || key;
    return { [newKey] : result[key] };
  }).reduce((a, b) => Object.assign({}, a, b));
}

console.log(getDNSStats(['epam.com']));

// module.exports = {
//   getDNSStats
// };
